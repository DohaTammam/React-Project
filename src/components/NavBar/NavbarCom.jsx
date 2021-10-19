import { Link } from 'react-router-dom'
import './NavbarCom.scss'
const NavbarComp = ()=>{
    return(
      <>
        <nav class="navbar bg-dark">
            <h1>Logo</h1>
            <div className="NavBar">
                <Link className="mx-3 text-white" to="/">Home</Link>
                <Link className="mx-3 text-white" to="/shop">Shop</Link>
                <Link className="mx-3 text-white" to="/counter">Counter</Link>
            </div>
        </nav>
      </>  
    );
}

export {NavbarComp};