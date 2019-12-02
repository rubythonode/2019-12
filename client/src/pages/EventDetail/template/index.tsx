import React from 'react';

import * as S from './style';
import BasedTemplate from '../../BasedTemplate/templates';

interface Props {
  eventHeader: React.ReactNode;
  eventContent: React.ReactNode;
  ticket: React.ReactNode;
  place: React.ReactNode;
}

function EventDetailTemplate({
  eventHeader,
  eventContent,
  ticket,
  place,
}: Props): React.ReactElement {
  return (
    <BasedTemplate>
      <S.Container>
        {eventHeader}
        <S.ContentContainer>
          <S.ContentWrapper>{eventContent}</S.ContentWrapper>
          <S.TicketWrapper>{ticket}</S.TicketWrapper>
        </S.ContentContainer>
        <S.PlaceWrapper>{place}</S.PlaceWrapper>
      </S.Container>
    </BasedTemplate>
  );
}

export default EventDetailTemplate;
