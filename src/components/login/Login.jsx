import "../../style/login/login.scss";

import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Login () {
    const showPassword = () => {
        const eye = document.querySelector('#eye');
        const eyeBlocked = document.querySelector('#eyeBlocked');
        const inputPassword = document.querySelector('#password');

        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            eye.style.display = "block";
            eyeBlocked.style.display = "none";
        } else {
            inputPassword.type = "password";
            eyeBlocked.style.display = "block";
            eye.style.display = "none";
        }

    }
    const recoverPassword = () => {
        const recoverPasswordBlock = document.querySelector('.label-input-block-recover-password ');

        const eye = document.querySelector('#eye');
        const eyeBlocked = document.querySelector('#eyeBlocked');

        const loginBackground = document.querySelector('#login')
        const loginArea = document.querySelector('.login-area')
        
        if (recoverPasswordBlock.style.display === "none") {
            recoverPasswordBlock.style.display = "flex";
            loginBackground.style.height = "950px"; 
            loginArea.style.height = "600px";
            eyeBlocked.style.top = "405px";
            eye.style.top = "405px";
        } else {
            recoverPasswordBlock.style.display = "none";
            loginBackground.style.height = "750px"; 
            loginArea.style.height = "400px";
            eyeBlocked.style.top = "385px";
            eye.style.top = "385px";
        };
    }
    return (
        <section id="login">
            <h2>Login</h2>
            <div className="login-area">
                <h3>Olá, seja bem-vindo(a)!</h3>
                <p>Para efetuar seu login preencha os campos abaixo.</p>
                <form className="form" action="" method="get">
                    <div className="label-input-block">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Digite aqui o seu e-mail..." />
                    </div>
                    <div className="label-input-block">
                        <label htmlFor="password">Senha:</label>
                        <div className="input-password">
                            <input type="password" name="password" id="password" placeholder="Digite aqui a sua senha..." />
                            <ImEye onClick={showPassword} id="eye" />
                            <ImEyeBlocked onClick={showPassword} id="eyeBlocked"/>
                        </div>
                    </div>
                    <button className="login-button" type="submit">Entrar</button>
                </form>
                <div className="recover-password">
                    <button onClick={recoverPassword} className="recover-password-button">Esqueci minha senha</button>
                    <form className="label-input-block-recover-password" action="" method="post">
                        <label htmlFor="recover-password">Para recuperar sua senha:</label>
                        <input type="email" name="recover-password" id="recover-password" placeholder="Digite aqui seu E-mail..." />
                        <button className="recover-password-button" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <div className="register-call">
                <p>Cadastre-se e ganhe descontos!</p>
                <Link className="link-to-register" to="/register">Clique aqui e cadastre-se</Link>
            </div>
        </section>
    )
}