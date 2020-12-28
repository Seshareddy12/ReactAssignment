import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn btn-primary" style={{marginLeft:"10px",width:"150px",marginTop:"10px"}} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;