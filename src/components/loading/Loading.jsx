import { VscLoading } from "react-icons/vsc";

import "./loading.scss";

export default function Loading() {
    return (
        <div className="loading-container">
            <VscLoading className="loading-icon" />
        </div>
    )
}