import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useInput from './useInput';

describe('useInputHook', () => {
  test('value', () => {
    const {result} = renderHook(() => useInput());
    expect(result.current.value).toBe('');
    expect(result.current.onChange).toBeInstanceOf(Function);
  });
  test('onChange', async () => {
    const TestComponent = () => {
      const input = useInput();
      return (
        <div>
          <input
            data-testid='test-input'
            type='text'
            value={input.value}
            onChange={input.onChange}
          />
          <p data-testid='test-value'>{input.value}</p>
        </div>
      );
    };
    render(<TestComponent />);
    const inputElement = screen.getByTestId('test-input');
    const valueElement = screen.getByTestId('test-value');
    expect(valueElement.textContent).toBe('');
    await userEvent.type(inputElement, 'testing input');
    expect(valueElement.textContent).toBe('testing input');
  });
});
