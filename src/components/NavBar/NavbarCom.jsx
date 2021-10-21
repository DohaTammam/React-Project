import { Link } from 'react-router-dom'
import './NavbarCom.scss'
const NavbarComp = ()=>{
    return(
      <>
        <nav class="navbar bg-dark">
            <h1>React Portfolio</h1>
            <div className="NavBar">
                <Link className="mx-3 text-white" to="/">Home</Link>
                {/* <Link className="mx-3 text-white" to="">About</Link> */}
                <Link className="mx-3 text-white" to="/shop">e-commerce</Link>
                <Link className="mx-3 text-white" to="/counter">Counter</Link>
                <Link className="mx-3 text-white" to="/todo">ToDo</Link>
            </div>
        </nav>
      </>  
    );
}

export {NavbarComp};