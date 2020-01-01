import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'


class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false, alert: null });
  }

  // Get single use
  getUser = async login => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${login}?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false, alert: null });
  }

  clearUsers = () => this.setState({ users: [] });

  setAlert = (text, type) => {
    this.setState({ alert: { text, type } })  // Same as {text: text, type: type}
  }

  render() {
    const { users, alert, user, loading } = this.state;
    const showClear = users.length > 0 ? true : false

    return (
      <Router>
        <div className='App'>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={showClear} setAlert={this.setAlert} />
                  {alert && <Alert alert={alert} />}
                  <Users {...this.state} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading} />
              )} />
            </Switch>
          </div>
        </div >
      </Router>
    )
  }
}

export default App;