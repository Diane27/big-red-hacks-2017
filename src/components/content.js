import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './main'
import Events from './events'
import Classroom from './classroom'

const Content = () => (
  <main style={{"padding-top": "100px"}}>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/events' component={Events}/>
      <Route path='/classroom' component={Classroom}/>
    </Switch>
  </main>
)

export default Content
