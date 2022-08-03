import "./titleSection.css"

function TitleSection({ title, titleName }) {
    return (
        <>
            <h3 className="title">{ title }</h3>
            <span className="title-name">{ titleName }</span>
        </>
    )
}

export default TitleSection