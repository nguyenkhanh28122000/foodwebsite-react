import BoxStar from "../boxStar/boxStar"
import Button from "../button/button"

import "./specContent.css"

function SpecContent({ 
    imgSpec,
    titleSpec,
    specText,
    specPrice
 }) {
    return (
        <div className="box speciality-body__item">
                <div className="box__image">
                    <img src={imgSpec} alt></img>
                    <a href="#" className="box__image-icon header-icon__item  fa-solid fa-heart"></a>
                </div>

                <BoxStar/>

                <h3 className="box__title">{titleSpec}</h3>
                <p>{specText}</p>
                <div className="add-price">
                    <Button btnMove>Add To Cart</Button>
                    <span className="price">{specPrice}</span>
                </div>
        </div>
    )
}

export default SpecContent