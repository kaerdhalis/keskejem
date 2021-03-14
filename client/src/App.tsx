
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';


function App() {



  

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route path={'/:username'} exact component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
