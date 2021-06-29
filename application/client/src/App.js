import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Settings from './pages/Settings'; 
import userFeed from './pages/UserFeed'; 
import Baker from './components/Baker';
import Chuson from './components/Chuson';
import Eusebio from './components/Eusebio';
import Walker from './components/Walker';
import Echevarria from './components/RowenaEchevarria';
import Krina from './components/Krina';
import Schroeder from './components/Schroeder';
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
        <Route path="/userFeed" component={userFeed} />
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
