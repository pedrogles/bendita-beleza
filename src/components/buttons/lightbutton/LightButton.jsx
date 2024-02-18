import "./lightbutton.scss";

export function LightButton({text, href}) {
    const handle_href = () => {
        window.location.href = href;
    }
    return ( 
        <button className="light-button" onClick={handle_href}>
            {text}
        </button>
    )
}