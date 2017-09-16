import React from 'react';
import { Switch, Route } from 'react-router-dom'

import AllEvents from './events/all_events';
import EventDetails from './events/event_details'

const Events = () => (
    <Switch>
      <Route exact path='/events' component={AllEvents}/>
      <Route path='/events/:eventId' component={EventDetails}/>
    </Switch>
  )

export default Events