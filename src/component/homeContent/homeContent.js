import Button from '../button/button'

import "./homeContent.css"

function HomeContent ({ 
    title,
    foodName,
    desFood,
    foodImg
 }) {
    return (
        <div className="slide__item grid__row">
            <div className="home-content grid__column-2">
                <h3>{title}</h3>
                <span>{foodName}</span>
                <p>{desFood}</p>
                <Button btnMove>Order Now</Button>
            </div>

            <div className="home-image grid__column-2">
                <img src={foodImg} alt=""></img>
            </div>
        </div>
    )
}

export default HomeContent