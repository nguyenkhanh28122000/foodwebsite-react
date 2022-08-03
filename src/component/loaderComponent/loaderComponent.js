import "./loader.css"

function LoaderComponent({loaderGif, loadOut}) {
    return (
        <div className={`web-load ${loadOut && 'load-out'}`}>
            <img src={loaderGif} alt=""></img>
        </div>
    )
}

export default LoaderComponent