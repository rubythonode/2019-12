import {
  Op,
  Order,
  WhereOptions,
  Includeable,
  FindAttributeOptions,
} from 'sequelize';
import { Event, TicketType, User } from '../models';

export async function getEvents(limit = 20, startAt: Date): Promise<Event[]> {
  const where: WhereOptions = startAt
    ? { isPublic: true, startAt: { [Op.lt]: startAt } }
    : { isPublic: true };
  const attributes: FindAttributeOptions = {
    exclude: ['isPublic', 'createdAt', 'updatedAt'],
  };
  const order: Order = [['startAt', 'DESC']];
  const include: Includeable[] = [
    {
      model: TicketType,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
    { model: User, attributes: ['id', 'lastName', 'firstName'] },
  ];

  return await Event.findAll({ where, attributes, limit, order, include });
}

export async function getEventById(id: number): Promise<Event> {
  const where: WhereOptions = { id };
  const attributes: FindAttributeOptions = {
    exclude: ['isPublic', 'createdAt', 'updatedAt'],
  };
  const include: Includeable[] = [
    {
      model: TicketType,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
    { model: User, attributes: ['id', 'lastName', 'firstName'] },
  ];

  const event = await Event.findOne({ where, attributes, include });
  if (!event) throw Error('Not Found');

  return event;
}