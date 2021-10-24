import './App.css';
import { Home } from './components/home/Home';
import { NavbarComp } from './components/NavBar/NavbarCom';
import { BrowserRouter as Br, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import { Shop } from './components/shop/Shop';
import { Product } from './components/product/Product';
import { CounterAction } from './components/Views/counterAction/CounterAction';
import Todo from './components/Views/todo/Todo';
import { LoginForm } from './components/Form/LoginForm';
import { RegisterForm } from './components/Form/RegisterForm';
import { About } from './components/about/About';


function App() {

  return (
    <>
      <Br>
        <NavbarComp/>
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={About} path="/about"/>
          <Route component={CounterAction} path="/counter"/>
          <Route component={Shop} path="/shop" exact/>
          <Route component={Product} path="/shop/:id"/>
          <Route component={Todo} path="/todo"/>
          <Route component={LoginForm} path="/login"/>
          <Route component={RegisterForm} path="/register"/>
        </Switch>
      </Br>
    </>
  );
}

export default App;
