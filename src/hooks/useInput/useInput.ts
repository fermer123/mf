import {ChangeEvent, useCallback, useState} from 'react';

type IChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;
const useInput = (initialValue = '') => {
  const [value, setValue] = useState<string>(initialValue);
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
