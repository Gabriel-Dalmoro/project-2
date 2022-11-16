import React from 'react'
// import Body from '../components/Body.jsx'
// import Head from '../components/Head.jsx'
// import Title from '../components/Title.jsx'
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
      <Route path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
    </Switch>
  );

export default Main