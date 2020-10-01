/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Ooooops, that's not good</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
