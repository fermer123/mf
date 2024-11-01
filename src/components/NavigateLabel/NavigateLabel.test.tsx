import React from 'react';
import renderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NavigateLabel, {INavigateLabel} from './NavigateLabel';

describe('NavigateLabel', () => {
  const action = jest.fn();

  const customProps: INavigateLabel = {
    label: 'test',
    switchAuth: action,
  };

  test('toMatchSnapShot', () => {
    const tree = renderer.create(<NavigateLabel {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('to have been called', async () => {
    render(<NavigateLabel label='test' switchAuth={action} />);
    const linkElement = screen.getByText('test');
    await userEvent.click(linkElement);
    expect(action).toHaveBeenCalled();
  });
  test('label text', () => {
    render(<NavigateLabel label='test' switchAuth={action} />);
    const linkElement = screen.getByText('test');
    expect(linkElement).toHaveTextContent(/test/i);
  });
});
