import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App