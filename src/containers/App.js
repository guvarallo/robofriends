import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions/actions';

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

const App = (props) => {
  const { searchfield, onSearchChange, onRequestRobots, robots, isPending } = props;
  const filteredRobots = robots.filter(robot => {
    return robot.firstName.toLowerCase().includes(searchfield.toLowerCase());
  })

  useEffect(() => {
    onRequestRobots();
    // eslint-disable-next-line
  }, []);

  return isPending ?
    <h1 style={{ textAlign: "center" }}>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} /><br />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
