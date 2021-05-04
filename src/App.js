import logo from './logo.svg';
import './App.css';
import ProductList from '../src/containers/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
