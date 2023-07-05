import {useState} from "react";
export default function RegisterPage(){
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    {/* Async function that is always active on register page */}
    async function register(ev){
        {/*Stops redirection from register page */}
        ev.preventDefault(); 
        await fetch('http://localhost:4000/register', {
            method:"POST",
            body: JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},

        })
    }
    return(
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            {/*Input field that checks value of username and when something is typed sets username to
                the input */}
                <input type = 'text'
                 placeholder="Username" 
                 value = {username} 
                 onChange = {ev => 
                 setUsername(ev.target.value)}/>
                {/*Input field that checks value of password and when something is typed sets password to
                the input */}
                <input type = 'password' placeholder="Password"
                value = {password}
                onChange={ev => setPassword(ev.target.value)}/>

                <button>Register</button>
            </form>
    )
}