import React from "react";
import '../css/Login.css';

import Japs from '../assets/japs.png';
import Illustration from '../assets/art.png';
import ForwardIcon from '../assets/forward.png';
import { Link } from "react-router-dom";

function Login() {
    return(
        <div className="container">
            <div className="login-container">
                <section className="login-form-container">
                    <img src={Japs} className="japs" alt="japanese word"/>
                    <form className="login-form">
                        <input type="text" id="email" placeholder="Mail"/>
                        <input type="password" id="mdp" placeholder="Mot de passe"/>
                        <button type="submit" id="signup-submit">S'inscrire</button>
                    </form>
                    <Link to="#" className="to-mdp">Mot de passe oublier?</Link>
                </section>
                
                <section className="illustration-container">
                    <Link to="/Signup" className="to-signup">
                        <p>S'inscrire</p> 
                        <img src={ForwardIcon} alt="sign up" />
                    </Link>
                    <img src={Illustration} className="illustration" alt="illustration"/>
                </section>
            </div>
        </div>
    );
}

export default Login;