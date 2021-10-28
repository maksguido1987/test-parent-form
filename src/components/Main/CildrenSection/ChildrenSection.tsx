import React from 'react';

import { IChildrenProps } from '../../../types';
import Child from '../Child/Child';
import { StyledAddChildBtn } from '../StyledAddChildBtn';
import { StyledChildrenSection } from './StyledChildrenSection';

const ChildrenSection: React.FC<IChildrenProps> = ({
  stateChildren,
  onAddChild,
  onDeleteChild,
  syncingTheChildAge,
  syncingTheChildName,
}) => {
  const children = stateChildren.map((item) => {
    return (
      <Child
        key={item.id}
        id={item.id}
        onDeleteChild={onDeleteChild}
        syncingTheChildAge={syncingTheChildAge}
        syncingTheChildName={syncingTheChildName}
      />
    );
  });

  return (
    <StyledChildrenSection>
      Дети (макс. 5):
      {stateChildren.length < 5 && (
        <StyledAddChildBtn onClick={onAddChild}>Добавить ребёнка</StyledAddChildBtn>
      )}
      <div className="children-wrapper">{children}</div>
    </StyledChildrenSection>
  );
};

export default ChildrenSection;
