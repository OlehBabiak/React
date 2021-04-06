import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/test-route">Test route</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          < Route path = "/users" component={Users}/>  
            
          
          <Route path="/" exact>
            {Home}
          </Route>

          <Route path = "/test-route" render = {(args) => {// dвикористовуємо якщо на основі цих аргументів хочемо рендерити одне чи інше і прокидувати пропсами
          console.log(args);
          return <TestRoute/>
          }}/>
          
          {/* <Route>
            <h1>PAGE NOT FOUND</h1>
          </Route> */}

          <Route>
            <Redirect to='/'/>
          </Route>

        </Switch> 
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function TestRoute() {
  return <h2>Test route</h2>;
}