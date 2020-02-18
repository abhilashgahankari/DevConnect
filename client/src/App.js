import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import Profiles from "./components/profiles/Profiles";
import AddEducation from "./components/profile-forms/AddEducation";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

import "./App.css";

//REDUX
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className='container'>
            <Alert />
            <Switch>
              <Route path='/' exact component={Landing} />
              <Route path='/register' exact component={Register} />
              <Route path='/login' exact component={Login} />
              <Route path='/profiles' exact component={Profiles} />
              <Route path='/profile/:id' exact component={Profile} />
              <PrivateRoute path='/dashboard' exact component={Dashboard} />
              <PrivateRoute
                path='/create-profile'
                exact
                component={CreateProfile}
              />
              <PrivateRoute
                path='/edit-profile'
                exact
                component={EditProfile}
              />
              <PrivateRoute
                path='/add-experience'
                exact
                component={AddExperience}
              />
              <PrivateRoute
                path='/add-education'
                exact
                component={AddEducation}
              />
              <PrivateRoute path='/posts' exact component={Posts} />
              <PrivateRoute path='/posts/:id' exact component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
