import React from "react";
import '../css/Signup.css';

import Japs from '../assets/japs.png';
import Illustration from '../assets/art.png';

function Signup() {
    return(
        <div className="container">
            <div className="signup-container">
                <section className="form-container">
                    <img src={Japs} className="japs" alt=" "/>

                    <form className="signup-form">
                        <input type="text" id="nom" placeholder="Nom"/>
                        <input type="text" id="email" placeholder="Mail"/>
                        <input type="password" id="mdp" placeholder="Mot de passe"/>
                        <button type="submit" id="signup-submit">S'inscrire</button>
                    </form>
                </section>
                
                <section className="illustration-container">
                    <img src={Illustration} className="illustration" alt="Illustration"/>
                </section>
            </div>
        </div>
    );
}

export default Signup;