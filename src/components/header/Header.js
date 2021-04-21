import { useState } from "react";
import { LoginForm } from "../../login-form/LoginForm";
import { RegistrationForm } from "../../registration-form/RegistrationForm";

const Header = () => {
  const [ isLogin, setIsLogin ] = useState(false);
  const [ loginIsHidden, setLoginIsHidden] = useState(true);
  const [ registrationIsHidden, setRegistrationIsHidden] = useState(true);
  
  const handleClickLogin = () => {
    setLoginIsHidden(!loginIsHidden);
  };

  const handleClickRegistration = () => {
    setRegistrationIsHidden(!registrationIsHidden);
  };


  return (
    <div>
      <h1>Logo</h1>
      {isLogin ? <button>Logout</button> : <><button onClick={handleClickLogin}>Login</button><button onClick={handleClickRegistration}>Registration</button></>}
      { loginIsHidden ? null : <LoginForm />}
      { registrationIsHidden ? null : <RegistrationForm />}
    </div>
  );
}

export { Header };