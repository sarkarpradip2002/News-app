import React, { Component } from 'react'
import Allnews from './components/Allnews';
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  
  api=process.env.REACT_APP_NEWS_API;
  state={
    progress: 0,
  }

  changeState=(progress)=>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Navbar/>
        <Switch>
        <Route exact path="/">
        <Allnews changeprogress={this.changeState} apikey={this.api}  key="home" category='general'/>
            </Route>
          <Route exact path="/News-app">
        <Allnews changeprogress={this.changeState} apikey={this.api}  key="general" category='general'/>
            </Route>
          <Route exact path="/health">
          <Allnews changeprogress={this.changeState} apikey={this.api}  key="health" category='health'/>
          </Route>
          <Route exact  path="/business">
          <Allnews changeprogress={this.changeState} apikey={this.api}  key="business" category='business'/>
          </Route>
          <Route exact path="/entertainment">
          <Allnews changeprogress={this.changeState} apikey={this.api}  key="entertainment" category='entertainment'/>
          </Route><Route exact path="/science">
          <Allnews changeprogress={this.changeState} apikey={this.api}  key="science" category='science'/>
          </Route>
          <Route exact path="/sports">
          <Allnews changeprogress={this.changeState} apikey={this.api}  key="sports" category='sports'/>
          </Route><Route exact path="/technology">
          <Allnews changeprogress={this.changeState} apikey={this.api}  key="technology" category='technology'/>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
