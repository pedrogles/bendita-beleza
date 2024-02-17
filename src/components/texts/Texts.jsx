import "./texts.scss";

export function PageTitle({ name }) {
    return (
        <h1 className="page-title">{name}</h1>
    )
}

export function SubTitle({ name }) {
    return (
        <h2 className="sub-title">{name}</h2>
    )
}

export function SmallParagraph({ name }) {
    return (
        <h2 className="small-paragraph">{name}</h2>
    )
}