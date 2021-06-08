import Home from './pages/Home';
import About from './pages/About';
import Baker from './components/Baker';
import Eusebio from './components/Eusebio';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/mbaker" component={Baker} />
        <Route path="/ceusebio" component={Eusebio} />
      </Switch>
    </main>
  );
}

export default App;
