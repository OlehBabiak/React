import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import Posts from "./components/Posts";

export default function App() {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
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
        
        </Switch> 
      </div>
    </Router>
  );
}

