export interface ILabelProps {
  maxWidth?: string;
  margin?: string;
}

export interface IInputProps extends ILabelProps {
  type: 'text' | 'number';
  text: string;
  value: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IParentData {
  parentName: string;
  parentAge: string;
}

export interface IChildData {
  id: string;
  childName: string;
  childAge: string;
}

export interface IChildrenState {
  parentAge: string;
  parentName: string;
  stateChildren: IChildData[];
}

export interface IChildProps {
  id?: string;
  onDeleteChild: (v: string) => void;
  syncingTheChildName: (id: string, childName: string) => void;
  syncingTheChildAge: (id: string, childAge: string) => void;
}

export interface IPersonalDataState {
  onSetParentName: (v: string) => void;
  onSetParentAge: (v: string) => void;
}

export interface IChildrenProps extends IChildProps {
  stateChildren: IChildData[];
  onAddChild: () => void;
  onDeleteChild: (v: string) => void;
}
