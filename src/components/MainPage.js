import React, { useEffect, useCallback } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './MainPage.css';

const MainPage = (props) => {
  const {
    searchfield,
    onSearchChange,
    onRequestRobots,
    robots,
    isPending,
  } = props;

  const filteredRobots = useCallback(() => {
    return robots.filter((robot) => {
      return robot.firstName.toLowerCase().includes(searchfield.toLowerCase());
    });
  }, [searchfield, robots]);

  useEffect(() => {
    onRequestRobots();
    // eslint-disable-next-line
  }, []);

  return isPending ? (
    <h1 style={{ textAlign: 'center' }}>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <br />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots()} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default MainPage;
