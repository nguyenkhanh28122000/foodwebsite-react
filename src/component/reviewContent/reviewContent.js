import BoxStar from "../boxStar/boxStar"

import "./reviewContent.css"

function ReviewContent({
    imgPer,
    namePer,
    reviewText
}) {
    return (
        <div className="slide">
            <div className="personal">
                <div className="avatar">
                    <img src={imgPer} alt=""></img>
                            
                    <div className="avatar__name">
                        <span>{namePer}</span>
                            
                        <BoxStar />
                    </div>
                </div>
                        
                <i className="quote-icon fa-solid fa-quote-right"></i>
            </div>
            <p className="review-text">{reviewText}</p>
        </div>
    )
}

export default ReviewContent