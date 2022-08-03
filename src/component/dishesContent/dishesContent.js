import Button from '../button/button'
import BoxStar from '../boxStar/boxStar'

import "./dishesContent.css"

function DishesContent({ imgDishes, nameFood, priceDishes }) {
    return (
        <div className="box dishes-body__item">
            <div className="box__image">
                <img src={imgDishes} alt=""></img>
                <a href="#" className="box__image-icon header-icon__item  fa-solid fa-eye"></a>
                <a href="#" className="box__image-icon header-icon__item  fa-solid fa-heart"></a>
            </div>

            <h3 className="box__title">{nameFood}</h3>
            <BoxStar/>

            <div className="add-price">
                <span className="price">{priceDishes}</span>
                <Button btnStand>Add To Cart</Button>
            </div>
        </div>
    )
}

export default DishesContent