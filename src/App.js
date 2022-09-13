import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style';
import { GlobalIcon } from './statics/iconfont/iconfont'
import Header from './common/header/index'
import Detail from './pages/detail'
import Home from './pages/home'
import store from './store'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
                <Routes>
                  <Route path='/' exact element={ <Home /> }></Route>
                  <Route path='/detail' exact element={ <Detail/> }></Route>
                </Routes>
            </BrowserRouter>
          </div>
        </Provider>
        <GlobalStyle />
        <GlobalIcon />
      </div>
    );
  }
}

export default App;
