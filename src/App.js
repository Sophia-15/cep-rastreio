import Cep from './pages/Cep';
import './styles/global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tracking from './pages/Tracking';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cep} />
        <Route exact path="/rastrear" component={Tracking} />
      </Switch>
    </Router>
  );
}

export default App;
