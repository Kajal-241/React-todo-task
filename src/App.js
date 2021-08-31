import React from 'react'
import './App.css';
import {Switch} from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import HeaderBar from './Component/Header/HeaderBar'

import Tasks from './Component/Otherpages/Tasks'
import AddTask from './Component/Otherpages/AddTask'
import View from './Component/Otherpages/View'


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <HeaderBar/>   
      <Switch>
     
      <Route exact path="/tasks" component={Tasks}/>
      <Route exact path="/add-task" component={AddTask}/>
      <Route exact path="/view" component={View}/>
    
       
      </Switch>
     </BrowserRouter>
    </div>
  );
}
export default App;
