import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/Profile/Profile';
import Repo from './components/Repo/Repo';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/repo">
            <Repo />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
