import React from 'react';
import { Switch, Route } from 'react-router-dom'

import AllClassrooms from './classroom/all_classrooms';
import ClassroomView from './classroom/classroom_view';


const Classroom = () => (
    <Switch>
      <Route exact path='/classroom' component={AllClassrooms}/>
      <Route path='/classroom/:classId' component={ClassroomView}/>
    </Switch>
  )

export default Classroom