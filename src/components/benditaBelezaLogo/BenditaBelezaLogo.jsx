import RvLogo from "../../assets/logo/rv.svg";

import "./benditabelezalogo.scss";

export function BenditaBelezaLogo({ image }) {
    return (
        <div className="bendita-beleza-logo-container">
            {image && <img className="bendita-beleza-image" src={RvLogo} alt="" />}
            <h2 className="bendita-beleza-title">Bendita Beleza</h2>
            <p className="bendita-beleza-paragraph">Cabeleireira</p>
        </div>
    );
};