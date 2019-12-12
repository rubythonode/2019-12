import { Request, Response, NextFunction } from 'express';
import { createEventAndTicket } from 'services/events';
import { putObject } from 'utils/awsS3';
import { Event, TicketType } from 'models';
import { v1 as uuid } from 'uuid';
import { CREATED } from 'http-status';
import fileType = require('file-type');

interface Body extends Partial<Event> {
  ticket: Partial<TicketType>;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const {
    isPublic,
    title,
    mainImg,
    startAt,
    endAt,
    place,
    address,
    placeDesc,
    desc,
    ticket,
  } = req.body as Body;
  const event: Partial<Event> = {
    isPublic,
    title,
    mainImg,
    startAt,
    endAt,
    place,
    address,
    placeDesc,
    desc,
  };
  const mainImageId = uuid();
  const mainImageExtension = fileType(req.file.buffer)!.ext;
  const mainImageKey = `${mainImageId}.${mainImageExtension}`;

  try {
    const { URL } = await putObject(mainImageKey, req.file.buffer);
    event.mainImg = URL;
  } catch (error) {
    next(error);
  }

  try {
    event.userId = req.user?.id;
    const { eventId, ticketId } = await createEventAndTicket(event, ticket);
    res.status(CREATED).json({ eventId, ticketId });
  } catch (error) {
    next(error);
  }
};
