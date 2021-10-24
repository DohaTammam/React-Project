import { Link } from 'react-router-dom'
import './NavbarCom.scss'
const NavbarComp = ()=>{
    return(
      <>
        <nav class="navbar bg-dark">
            <h1>React Portfolio</h1>
            <div className="NavBar">
                <a className="mt-2">
                  <Link className="mx-2 text-white" to="/">Home</Link>
                </a>
                <a className="mt-2">
                  <Link className="mx-2 text-white" to="/about">About</Link>
                </a>
                <a className="mt-2">
                  <Link className="mx-2 text-white" to="/shop">e-commerce</Link>
                </a>
                <a className="mt-2">
                  <Link className="mx-2 text-white" to="/counter">Counter</Link> 
                </a>
                <a className="mt-2">
                  <Link className="mx-2 text-white" to="/todo">ToDo</Link>
                </a>
                <a className="btn btn-success mx-1 ">
                  <Link className="mx-2 text-white" to="/login">Login</Link>  
                </a>
                <a className="btn btn-success mx-1 ">
                  <Link className="mx-2 text-white" to="/register">Register</Link>
                </a>
            </div>
        </nav>
      </>  
    );
}

export {NavbarComp};