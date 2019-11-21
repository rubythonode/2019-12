import React from 'react';
import * as S from './style';
import Label from '../../atoms/Label';

interface Props {
  /** 인풋의 라벨 이름 */
  labelName: string;
  required?: boolean;
  /** is invalid? */
  invalid?: boolean;
  /** is disabled */
  disabled?: boolean;
  defaultValue?: string;
  /** placeholder content */
  placeholder?: string;
  /** input value */
  value?: string;
  /** onChange handler */
  onChange?: () => void;
  /** invalid할 경우 표시할 메시지 */
  captionContent: string;
}

function FormInput({
  labelName,
  captionContent,
  invalid = false,
  required = false,
  ...props
}: Props): React.ReactElement {
  return (
    <S.FormInputContainer>
      <Label name={labelName} required={required} />
      <S.FormInput invalid={invalid} {...props} />
      <S.FormCaption invalid={invalid}>{captionContent}</S.FormCaption>
    </S.FormInputContainer>
  );
}

export default FormInput;
