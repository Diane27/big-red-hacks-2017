import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './main'
import Events from './events'

const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/events' component={Events}/>
    </Switch>
  </main>
)

export default Content
