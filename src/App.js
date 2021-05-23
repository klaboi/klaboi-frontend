import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register'
import LogIn from './pages/Auth/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Project/Project';
import ProjectComponent from './components/Project/projectComponent';
import Detail from './components/Project/projectdetailComponent';
import Project2Component from './components/Project/project2Component';
import Project3Component from './components/Project/demo1Component';
import Project4Component from './components/Project/demo2Component';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import AuthRequired from './pages/Auth/AuthRequired';
import Profile from './pages/Auth/Profile';
import VerifyMail from './pages/Auth/VerifyMail';
import AddProject from './components/Project/addProject';
import ProjectDetail from './components/Project/ProjectDetail';
import Application from './components/Project/Application';

const publicRoutes = [
  {
      path: "/Login",
      exact: true,
      component: LogIn
  },
  {
    path: "/Detail",
    exact: true,
    component:Detail
},
  {
      path: "/",
      exact: true,
      component: Home
  },
  {
      path: "/Register",
      exact: true,
      component: Register
  },
];

const authRequiredRoutes = [
  {
      path: "/Projects",
      exact: true,
      component: <ProjectComponent/>
  },
  {
    path: "/Application",
    exact: true,
    component: <Project2Component/>
  },
  {
    path: "/Demo1",
    exact: true,
    component: <Project3Component/>
  },
  {
    path: "/Demo2",
    exact: true,
    component: <Project4Component/>
  },
  {
    path: "/Add",
    exact: true,
    component: <AddProject />
  },
  {
    path: "/Profile",
    exact: true,
    component: <Profile/>
  },
  {
    path: "/Verify",
    exact: true,
    component: <VerifyMail/>
  },
  {
    path: "/Projects/:project_uid",
    component: <ProjectDetail/>
  },
  {
    path: "/Projects/Apply/:project_uid",
    component: <Application />
  },
]

const pathsForLayout = routes => routes.map(route => route.path)

function App(props) {


    return (
      <div >
        
            <HashRouter basename ='/'>
                <Switch>
                    <Route exact path={pathsForLayout(publicRoutes)}>
                        <Switch>
                            {
                                publicRoutes.map((route,index) => (
                                    <Route
                                        key={index}
                                        exact={route.exact}
                                        path={route.path}
                                        component={route.component}
                                    />
                                ))
                            }
                        </Switch>
                    </Route>
                    <Route exact path={pathsForLayout(authRequiredRoutes)}>
                        <Switch>
                            {
                                authRequiredRoutes.map((route,index) => (
                                    <Route
                                        key={index}
                                        exact={route.exact}
                                        path={route.path}
                                        render={() => (
                                             <AuthRequired 
                                                 {...props}
                                                 orComponent={route.component}
                                             />
                                        )}
                                    />
                                ))
                            }
                        </Switch>
                    </Route>
                    {/* <Route component={NotFound} /> Your custom 404 page */}
               </Switch>
           </HashRouter>
        </div>
    )
  }

export default App
