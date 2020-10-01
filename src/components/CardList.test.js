import React from 'react';
import renderer from 'react-test-renderer';

import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Snow',
      email: 'john@test.com',
    },
  ];
  const tree = renderer.create(<CardList robots={mockRobots} />).toJSON();
  expect(tree).toMatchSnapshot();
});
