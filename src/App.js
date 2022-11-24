import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Footer from "./components/Footer"
import Main from "./components/Main"
function App() {
  return (
    <Router>
      <Link to="/footer">
        <p>Footer</p>
      </Link>
      <Link to="/main">
        <p>Main</p>
      </Link>
      <Switch>
        <Route path="/footer">
          <Footer />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
