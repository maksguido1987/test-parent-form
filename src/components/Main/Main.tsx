import React from 'react';
import { Route, Switch } from 'react-router';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { IChildData } from '../../types';
import ChildrenSection from './CildrenSection/ChildrenSection';
import PersonalData from './PersonalData/PersonalData';
import ResultsPage from './ResultsPage/ResultsPage';
import { StyledSaveBtn } from './SaveBtn/StyledSaveBtn';
import { StyledMain } from './StyledMain';

const Main = () => {
  const [stateChildren, setStateChildren] = React.useState<IChildData[]>([]);
  const [parentName, setParentName] = React.useState('');
  const [parentAge, setParentAge] = React.useState('');

  const onSetParentName = (value: string) => {
    setParentName(value);
  };

  const onSetParentAge = (value: string) => {
    setParentAge(value);
  };

  const onAddChild = () => {
    if (stateChildren.length < 5) {
      setStateChildren([
        ...stateChildren,
        {
          id: nanoid(),
          childName: '',
          childAge: '',
        },
      ]);
    }
  };

  const syncingTheChildName = (id: string, childName: string) => {
    const child = stateChildren.find((item) => item.id === id);
    child.childName = childName;
  };

  const syncingTheChildAge = (id: string, childAge: string) => {
    const child = stateChildren.find((item) => item.id === id);
    child.childAge = childAge;
  };

  const onDeleteChild = (id: string) => {
    const newState = stateChildren.filter((item) => item.id !== id);
    setStateChildren(newState);
  };

  return (
    <StyledMain>
      <h1>Персональные данные:</h1>
      <Switch>
        <Route exact path="/">
          <PersonalData onSetParentName={onSetParentName} onSetParentAge={onSetParentAge} />
          <ChildrenSection
            stateChildren={stateChildren}
            onAddChild={onAddChild}
            onDeleteChild={onDeleteChild}
            syncingTheChildName={syncingTheChildName}
            syncingTheChildAge={syncingTheChildAge}
          />
          <Link to="/result">
            <StyledSaveBtn>Отправить</StyledSaveBtn>
          </Link>
        </Route>

        <Route exact path="/result">
          <ResultsPage
            stateChildren={stateChildren}
            parentName={parentName}
            parentAge={parentAge}
          />
        </Route>
      </Switch>
    </StyledMain>
  );
};

export default Main;
