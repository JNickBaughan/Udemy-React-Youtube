import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import youtube from '../youtube/container/youtube_container'


class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={youtube} />
      </Router>
    );
  }
}



export default App