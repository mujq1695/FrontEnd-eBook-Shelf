import React from 'react';
import '../index.css';

function LoginSignUp() {
    const [isActive, setIsActive] = React.useState(false);
    

    const signupBtnonClick = function(){
      setIsActive(true)
    }

    
    const signinBtnonClick = function(){
      setIsActive(false)
    } 

  return (
  <div className={`parent ${isActive? 'active' : ''}`}>
        <div className="container">
            <div className="blueBg">
                <div className="box signin">
                    <h2>Already have an Account ?</h2>
                    <button className="signinBtn" onClick={signinBtnonClick}>Sign in</button>
                </div>
                <div className="box signup">
                    <h2>Don't have an Account ?</h2>
                    <button className="signupBtn" onClick={signupBtnonClick}>Sign up</button>
                </div>
            </div>
            <div className={`formBx ${isActive ? 'active' : ''}`}>
                <div className={`form signinForm ` }>
                    <form>
                        <h3>Sign In</h3>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="submit" value="Login"/>
                        <a href="a" className="forget">Forget Password</a>
                    </form>
                </div>

                <div className={`form signupForm `}>
                    <form>
                        <h3>Sign Up</h3>
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Email Address"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>
                        <input type="submit" value="Register"/>
                    </form>
                </div>
            </div>
        </div>
        </div>
        

  )
}

export default LoginSignUp;