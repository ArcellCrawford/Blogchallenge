
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Post from './Post';
import Header from './header';
import Layout from './Layout';
import HomePage from './pages/homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    
      <>
      {/*Route to Home Page */}
      <Routes>
        <Route path ='/' element = {<Layout/>}>
        <Route index element ={<HomePage/>}/> 
      {/*Route to Login Page */}
      <Route path ='/login' element= {<LoginPage/>}/> 
      <Route path='/register' element = {<RegisterPage />}/>
        </Route>
      </Routes>

      </>
      
  );
}

export default App;
