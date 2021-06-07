import logo from './logo.svg';
import About from './pages/About';
import Baker from './components/Baker';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/mbaker'>
          <Baker />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
