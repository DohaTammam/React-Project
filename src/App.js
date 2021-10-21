import './App.css';
import { Home } from './components/home/Home';
import { NavbarComp } from './components/NavBar/NavbarCom';
import { BrowserRouter as Br, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import { Shop } from './components/shop/Shop';
import { Product } from './components/product/Product';
import { CounterAction } from './components/Views/counterAction/CounterAction';
import Todo from './components/Views/todo/Todo';


function App() {

  return (
    <>
      <Br>
        <NavbarComp/>
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={CounterAction} path="/counter"/>
          <Route component={Shop} path="/shop" exact/>
          <Route component={Product} path="/shop/:id"/>
          <Route component={Todo} path="/todo"/>
        </Switch>
      </Br>
    </>
  );
}

export default App;
