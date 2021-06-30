import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Settings from './pages/Settings'; 
import UserFeed from './pages/UserFeed'; 
import Login from './pages/Login'; 
import Sign_Up from './pages/Sign_Up'; 
import Baker from './components/About/Baker';
import Chuson from './components/About/Chuson';
import Eusebio from './components/About/Eusebio';
import Walker from './components/About/Walker';
import Echevarria from './components/About/RowenaEchevarria';
import Krina from './components/About/Krina';
import Schroeder from './components/About/Schroeder';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
        <Route path="/userFeed" component={UserFeed} />
        <Route path="/login" component={Login} />
        <Route path="/sign_up" component={Sign_Up} />
        <Route path="/mbaker" component={Baker} />
        <Route path="/kenneth" component={Chuson} />
        <Route path="/ceusebio" component={Eusebio} />
        <Route path="/walker" component={Walker} />
        <Route path="/rechevarria" component={Echevarria} />
        <Route path="/krinap" component={Krina} />
        <Route path="/michael" component={Schroeder} />
      </Switch>
    </main>
  );
}

export default App;
