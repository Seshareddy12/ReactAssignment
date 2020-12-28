import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe";
import Photos from "./Photos";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Admin from "./Admin";
import PhotoForm from "./PhotoForm";
import LogoutButton from "../LogoutButton";

export default function NavBar() {
    return (
      <div>
        <nav className="navbar bg-info navbar-dark">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme">AboutMe</Link>
            </li>
            <li>
              <Link to="/contactme">Contact</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <LogoutButton/>
            </li>
          
          </ul>
        </nav>
  
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/aboutme"><AboutMe /></Route>
        <Route exact path="/contactme"><ContactMe /></Route>
        <Route exact path="/photos"><Photos/></Route>
        <Route exact path="/admin"><Admin/></Route>
        <Route path="/photoForm"  ><PhotoForm/></Route>
        </Switch>
      </div>
    );
  }