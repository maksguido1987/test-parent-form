import React from 'react';

import { IChildrenState } from '../../../types';
import { StyledResultsPage } from './StyledResultsPage';

const ResultsPage: React.FC<IChildrenState> = ({ stateChildren, parentName, parentAge }) => {
  const children = stateChildren.map((item) => {
    return (
      <div className="child-wrapper" key={item.id}>
        <span>{`${item.childName}, ${item.childAge}`}</span>
      </div>
    );
  });

  return (
    <StyledResultsPage>
      {parentName && parentAge && (
        <div className="parent-data">
          {parentName}, {parentAge} лет
        </div>
      )}
      <div className="children-data">{children}</div>
    </StyledResultsPage>
  );
};

export default ResultsPage;
