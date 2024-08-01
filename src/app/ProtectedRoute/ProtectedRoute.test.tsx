/* eslint-disable react/no-children-prop */
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

import ProtectedRoute from './ProtectedRoute';

describe('protectedRoute', () => {
  const children = <div>Test</div>;

  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ProtectedRoute children={children} user='user' />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
