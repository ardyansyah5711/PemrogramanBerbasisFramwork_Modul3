import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function BasicExample(){
  return(
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  let {path, ul} = useRouteMatch;
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${URL}/Sate, Nasi Goreng`}>Kuliner</Link>
        </li>
        <li>
          <Link to={`${URL}/Wisata Alam, Museum`}>Travelling</Link>
        </li>
        <li>
          <Link to={`${URL}/Ibis, JW Marriot`}>Review Hotel</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route exact path={`${path}/:topicid`}>
          <Topics />
        </Route>
      </Switch>
    </div>
  );
}

function Topics (){
  let {topicid} = useParams();

  return(
    <div>
      <h3>{topicid}</h3>
    </div>
  );
}

/*

function Child(){
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}  

// Halaman konten

//function NetFlix(){
 
 
 
  return(
    <div>
      <h2>NetFlix</h2>
    </div>
  );
}

function Gmail(){
  return(
    <div>
      <h2>Gmail</h2>
    </div>
  );
}

function Yahoo(){
  return(
    <div>
      <h2>Yahoo</h2>
    </div>
  );
}

function Amazon(){
  return(
    <div>
      <h2>Amazon</h2>
    </div>
  );
} */