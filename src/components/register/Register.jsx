import "../../style/register/register.scss";

import { ImEye, ImEyeBlocked } from "react-icons/im";

export default function Register() {
    const showPassword = () => {
        const eye = document.querySelector('#eyePassword');
        const eyeBlocked = document.querySelector('#eyeBlockedPassword');
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
    const showConfirmPassword = () => {
        const eye = document.querySelector('#eyeConfirmPassword');
        const eyeBlocked = document.querySelector('#eyeBlockedConfirmPassword');
        const inputPassword = document.querySelector('#confirmPassword');
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
    return (
        <section id="register">
            <h2>Cadastro</h2>
            <div className="register-area">
                <h3>Área de Cadastro</h3>
                <p>Para criar sua conta preencha os campos abaixo.</p>
                <form className="form" action="" method="get">
                    <div className="label-input-block">
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" name="name" placeholder="Digite aqui seu nome completo..." />
                    </div>
                    <div className="label-input-block">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" placeholder="Digite aqui seu e-mail..." />
                    </div>
                    <div className="label-input-block">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="number" name="cpf" placeholder="Digite aqui o seu cpf..." />
                    </div>
                    <div className="label-input-block">
                        <label htmlFor="date">Data de Nascimento:</label>
                        <input type="date" name="date" />
                    </div>
                    <div className="label-input-block">
                        <label htmlFor="password">Senha:</label>
                        <div className="input-password">
                            <input type="password" name="password" id="password" placeholder="Digite aqui a sua senha..." />
                            <ImEye onClick={showPassword} id="eyePassword" />
                            <ImEyeBlocked onClick={showPassword} id="eyeBlockedPassword"/>
                        </div>
                    </div>
                    <div className="label-input-block">
                        <label htmlFor="confirm-password">Confirmar Senha:</label>
                        <div className="input-password">
                            <input type="password" name="cofirm-password" id="confirmPassword" placeholder="Confirme aqui a sua senha..." />
                            <ImEye onClick={showConfirmPassword} id="eyeConfirmPassword" />
                            <ImEyeBlocked onClick={showConfirmPassword} id="eyeBlockedConfirmPassword"/>
                        </div>
                    </div>
                    <button className="register-button" type="submit">Cadastrar</button>
                </form>
            </div>
        </section>
    )
}