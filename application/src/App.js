import Home from './pages/Home';
import About from './pages/About';
import Baker from './components/Baker';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Echevarria from './components/RowenaEchevarria';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
              <Route path="/mbaker" component={Baker} />
              <Route path="/rechevarria" component={Echevarria} />
      </Switch>
    </main>
  );
}

export default App;
