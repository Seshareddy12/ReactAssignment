import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";


function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    isAuthenticated ?(
    <BrowserRouter>
    <NavBar/>
    </BrowserRouter>) : <LoginButton/>
  );
}

export default App;
