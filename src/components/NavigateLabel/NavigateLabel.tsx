import {FC, memo} from 'react';

import LabelNavigate from './NavigateLabel.styled';

export interface INavigateLabel {
  label: string;
  switchAuth: () => void;
}

const NavigateLabel: FC<INavigateLabel> = ({label, switchAuth}) => {
  return (
    <LabelNavigate underline='hover' onClick={switchAuth}>
      {label}
    </LabelNavigate>
  );
};

export default memo(NavigateLabel);
