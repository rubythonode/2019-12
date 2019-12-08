import React from 'react';

import * as S from './style';
import { Header, Footer } from 'components';

interface Props {
  children: React.ReactNode;
}

function BasedTemplate({ children }: Props): React.ReactElement {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Container>
  );
}

export default BasedTemplate;
