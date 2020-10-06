// import { renderHook, act } from '@testing-library/react-hooks';
import React from 'react';
import { render } from '@testing-library/react';

import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    searchfield: '',
    onSearchChange: jest.fn(),
    onRequestRobots: jest.fn(),
    robots: [],
    isPending: false,
  };

  wrapper = render(<MainPage {...mockProps} />);
});

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

// it('filters robots correctly', () => {
//   const mockProps2 = {
//     searchfield: 'a',
//     onSearchChange: jest.fn(),
//     onRequestRobots: jest.fn(),
//     robots: [
//       {
//         id: 3,
//         name: 'John',
//         email: 'john@test.com',
//       },
//     ],
//     isPending: false,
//   };
//   const wrapper2 = render(<MainPage {...mockProps2} />);

//   expect(wrapper2.current).toEqual([]);
// });
