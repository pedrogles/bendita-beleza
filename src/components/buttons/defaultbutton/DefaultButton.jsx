import "./defaultbutton.scss";

export function DefaultButton({ text, icon, href }) {
    const handle_href = () => {
        window.location.href = href;
    }
    return (
        <button className="default-button" onClick={handle_href}>
            {icon}{text}
        </button>
    )
}