
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Post from './Post';
import Header from './header';
import Layout from './Layout';
import HomePage from './pages/homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './Usercontext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
function App() {
  return (
    
      <UserContextProvider>
{/*Route to Home Page */}
<Routes>
        <Route path ='/' element = {<Layout/>}>
        <Route index element ={<HomePage/>}/> 
      {/*Route to Login Page */}
      <Route path ='/login' element= {<LoginPage/>}/> 
      <Route path='/register' element = {<RegisterPage />}/>
      <Route path='/create' element = {<CreatePost/>}/>
      <Route path ='/post/:id' element = {<PostPage/>}/>
      <Route path ='/edit/:id' element = {<EditPost/>}/>
      {/*<Route path='/post/:id'*/}
        </Route>
      </Routes> 
      </UserContextProvider>
      

      
      
  );
}

export default App;
