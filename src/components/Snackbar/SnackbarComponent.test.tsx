import React from 'react';

import {render, screen} from '@testing-library/react';

import SnackbarComponent, {ISnackbarComponentProps} from './SnackbarComponent';

describe('SnackbarComponent', () => {
  const customProps: ISnackbarComponentProps = {
    message: 'test',
    error: false,
    open: true,
    setOpen: jest.fn(),
  };

  const setup = (props: ISnackbarComponentProps) => {
    return render(<SnackbarComponent {...props} />);
  };
  test('to be in the document', () => {
    render(<SnackbarComponent {...customProps} />);
    const textElement = screen.getByText(/test/i);
    expect(textElement).toBeInTheDocument();
  });
  test('not to be in the document', () => {
    setup({error: false, message: 'test', open: false, setOpen: jest.fn()});
    const textElement = screen.queryByText(/test/i);
    expect(textElement).not.toBeInTheDocument();
  });
});
