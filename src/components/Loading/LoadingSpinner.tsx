import {FC} from 'react';

import {Spinner, SpinnerContainer} from './LoadingSpinner.styled';

const LoadingSpinner: FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
