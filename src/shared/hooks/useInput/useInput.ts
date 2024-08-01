import {ChangeEvent, useCallback, useState} from 'react';

type IChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;
const useInput = (initialValie = '') => {
  const [value, setValue] = useState<string>(initialValie);
  const onChange: IChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );
  return {
    setValue,
    value,
    onChange,
  };
};
export default useInput;
