import { Link } from "react-router-dom";
export default function Header(){
    return(
    <main>
    <header>
      <Link to='/' className='logo'>Best Blog on the Net</Link>
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
    </header>    
    </main>
    );
}