import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import Home from "./components/Home";
import Photos from "./components/Photos/Photos";
import Posts from "./components/Posts/Posts";
import Todos from "./components/Todos/Todos";
import Users from "./components/Users/Users";

export default function App() {
  return (
    <Router>
      <div>

        <nav>
          <ul className = "menu-main" >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>

            <li>
              <Link to="/albums">Albums</Link>
            </li>

            <li>
              <Link to="/comments">Comments</Link>
            </li>

            <li>
              <Link to="/photos">Photos</Link>
            </li>

            <li>
              <Link to="/todos">Todos</Link>
            </li>

            <li>
              <Link to="/users">Users</Link>
            </li>
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={Home} exact/>

          <Route path="/posts" >
            <Posts/>
          </Route>

          <Route path="/albums" >
            <Albums/>
          </Route>

          <Route path="/comments" >
            <Comments/>
          </Route>

          <Route path="/photos" >
            <Photos/>
          </Route>

          <Route path="/todos" >
            <Todos/>
          </Route>

          <Route path="/users" >
            <Users/>
          </Route>
        
        </Switch> 
      </div>
    </Router>
  );
}

