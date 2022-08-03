import { Children } from "react"
import "./fromComponent.css"

function FormComponent({ children }) {
    return (
        <div className="form">
            {children}
        </div>
    )
}

export default FormComponent