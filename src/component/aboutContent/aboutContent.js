import Button from '../button/button'

import "./aboutContent.css"

function AboutContent({ 
    imgAbout, 
    titleAbout, 
    aboutText1, 
    aboutText2 
}) {
    return (
        <div class="grid__row">
            <div class="about-img grid__column-2">
                <img src={imgAbout} alt=""></img>
            </div>
    
            <div class="about-content grid__column-2 ">
                <h3>{titleAbout}</h3>
                <p>
                   {aboutText1}
                </p>
                <p>
                    {aboutText2}
                </p>
    
                <div class="about-content__fas">
                    <div class="fas__item">
                        <i class="fa-solid fa-truck-fast"></i>
                        Free Delivery
                    </div>
                    <div class="fas__item">
                        <i class="fa-solid fa-dollar-sign"></i>
                        Easy Payments
                    </div>
                    <div class="fas__item">
                        <i class="fa-solid fa-headset"></i>
                        24/7 Service
                    </div>
                </div>
                <Button btnMove>Add To Cart</Button>
            </div>
        </div>
    )
}

export default AboutContent