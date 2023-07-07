import { useEffect,useState,useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Usercontext";

export default function Header(){
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() =>{
        fetch('http://localhost:4000/profile',{
            credentials:'include',
        }).then(response =>{
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    },[]);

    function logout(){
        fetch('http://localhost:4000/logout',{
        credentials:'include',
        method:'POST',
        });
        setUserInfo(null);
    }
const username = userInfo?.username;

    return(
    <main>
    <header>
      <Link to='/' className='logo'>Best Blog on the Net</Link>
      <nav>
        {username && (
             <>
             <span>Hello, {username}</span>
             <Link to ='/create'>Create New Post</Link>
             <a onClick={logout}>Logout</a>
             </>
        )}
        {!username && (
            <div>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </div >
        )}
        
      </nav>
    </header>    
    </main>
    );
}