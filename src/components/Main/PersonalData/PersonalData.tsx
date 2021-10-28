import React from 'react';

import { IPersonalDataState } from '../../../types';
import Input from '../../Input/Input';
import { StyledWrapperPersonalData } from './StyledWrapperPersonalData';

const PersonalData: React.FC<IPersonalDataState> = ({ onSetParentName, onSetParentAge }) => {
  const [parentName, setParentName] = React.useState('');
  const [parentAge, setParentAge] = React.useState('');

  const handleSetParentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onSetParentName(value);
    setParentName(value);
  };

  const handleSetParentAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onSetParentAge(value);
    setParentAge(value);
  };

  return (
    <StyledWrapperPersonalData>
      <Input type="text" text="Имя:" value={parentName} onHandleChange={handleSetParentName} />
      <Input type="number" text="Возраст:" value={parentAge} onHandleChange={handleSetParentAge} />
    </StyledWrapperPersonalData>
  );
};

export default PersonalData;
