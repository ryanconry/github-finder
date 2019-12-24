import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import NavBar from './components/layout/Navbar'
import Users from './components/users/Users'

export default class App extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    this.setState({ loading: true })
    axios.get('https://api.github.com/users').then(res => this.setState({ users: res.data }))
    this.setState({ loading: false })
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className="container">
          <Users />
        </div>
      </div>
    )
  }
}

