import { useRef } from "react"

import "./section.css"

function Section ({ children, ...props }) {
    const refSection = useRef()

    return (
        <section ref={refSection} className={props.class} id={props.id}>
            {children}
        </section>
    )
}

export default Section