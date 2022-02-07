 import React  from "react";
 import ReactDOM  from "react-dom";
 import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
  import {App,App2} from "./components/app";
 import Notfound from "./components/subComponents/404";
 const Fn =()=>(
    <Router>
       <Switch>
          {/* root */}
          <Route path='/' exact>
                  <App/>
          </Route>
          {/* Login */}
          <Route path='/login'>
               <App2/>
          </Route>
          {/* 404s */}
          <Route>
            <Notfound/>
          </Route>
       </Switch>
     </Router>
       
 )
ReactDOM.render(<Fn/>,document.getElementById('div'));