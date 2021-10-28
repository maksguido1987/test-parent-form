/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';

import { IChildProps } from '../../../types';
import Input from '../../Input/Input';
import { StyledChildWrapper } from './StyledChildWrapper';

const Child: React.FC<IChildProps> = ({
  onDeleteChild,
  id,
  syncingTheChildName,
  syncingTheChildAge,
}) => {
  const [childName, setChildName] = React.useState('');
  const [childAge, setChildAge] = React.useState('');

  const handleSetChildName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    syncingTheChildName(id, value);
    setChildName(value);
  };

  const handleSetChildAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    syncingTheChildAge(id, value);
    setChildAge(value);
  };

  return (
    <StyledChildWrapper>
      <Input
        text="Имя"
        type="text"
        margin="0 18px 10px 0"
        maxWidth="260px"
        value={childName}
        onHandleChange={handleSetChildName}
      />
      <Input
        text="Возраст"
        type="number"
        margin="0 18px 10px 0"
        maxWidth="260px"
        value={childAge}
        onHandleChange={handleSetChildAge}
      />
      <div className="delete-child" onClick={() => onDeleteChild(id)} role="button">
        Удалить
      </div>
    </StyledChildWrapper>
  );
};

export default Child;
