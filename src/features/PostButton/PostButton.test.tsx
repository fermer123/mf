import renderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PostButton, {IPostButtonProps} from './PostButton';

describe('PostButton', () => {
  const action = jest.fn();

  const customProps: IPostButtonProps = {
    disabled: false,
    onSubmit: jest.fn(),
    label: 'sign up',
  };
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<PostButton {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('to have been called', async () => {
    render(<PostButton disabled={false} onSubmit={action} label='log in' />);
    const linkElement = screen.getByRole('button');
    await userEvent.click(linkElement);
    expect(action).toHaveBeenCalled();
  });
  test('to be disabled', () => {
    render(<PostButton disabled onSubmit={action} label='log in' />);
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeDisabled();
  });
  test('label text', () => {
    render(<PostButton disabled={false} onSubmit={action} label='log in' />);
    const linkElement = screen.getByRole('button');
    expect(linkElement).toHaveTextContent(/log in/i);
  });
});
