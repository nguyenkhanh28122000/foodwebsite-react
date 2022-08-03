import GlobalStyle from './globalStyles/index.js'

import { useState } from 'react'

import {  HeaderComponent,
          SectionComponent,
          HomeContentComponent,
          TitleComponent,
          BoxContainerComponent,
          DishesContentComponent,
          AboutContentComponent,
          SpecContentComponent,
          ReviewContentComponent,
          FormComponent,
          InputContentComponent,
          ButtonComponent,
          FooterComponent,
          LoaderComponent
} from './component'

import {  homeContentDatas,
          dishesContentDatas,
          aboutContentDatas,
          specContentDatas,
          reviewContentDatas,
          orderContentDatas,
          footerContentDatas,
          footerVerData, 
          loaderGif,
        } 
from './data/data1'

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

// import required modules
import { Pagination, Autoplay } from "swiper"

function App() {
  const [loadOut, setLoadOut] = useState(false)
  // const [closeMenuScroll, setCloseMenuScroll] = useState(false)
  const [activeMenu, setActiveMenu] = useState(0)


  window.onload = () => {
    setInterval(()=> {
      setLoadOut(true)
    }, 2000)
  }

  return (
    <GlobalStyle>
      <HeaderComponent 
        activeIndex={activeMenu} 
      >
      </HeaderComponent>

      {/* SECTION HOME START */}
      <SectionComponent class="home" id="Home">
        <Swiper modules={[Pagination, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{
                  clickable:true
                }}
                autoplay={{
                  delay:4000,
                  disableOnInteraction:false
                }}
                className="mySwiper"
        >
          {
            homeContentDatas.map((homeContentData, index) => (
              <SwiperSlide key={index}>
                <HomeContentComponent 
                  title={homeContentData.title}
                  foodName={homeContentData.foodName}
                  desFood={homeContentData.desFood}
                  foodImg={homeContentData.foodImg}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </SectionComponent>
      {/* SECTION HOME END */}
      
      {/* SECTION DISHES START */}
      <SectionComponent  class="dishes" id="Dishes">
          <TitleComponent title='Our Dishes' titleName='POPULAR DISHES'/>
          <BoxContainerComponent>
              {
                dishesContentDatas.map((dishesContentData, index) => (
                  <DishesContentComponent 
                    key={index}
                    imgDishes={dishesContentData.imgDishes}
                    nameFood={dishesContentData.nameFood}
                    priceDishes={dishesContentData.priceDishes}
                  ></DishesContentComponent>
                ))
              }
          </BoxContainerComponent>
      </SectionComponent>
      {/* SECTION DISHES END */}

      {/*  WHY CHOOSE US START */}
      <SectionComponent id="About" class="about">
        <TitleComponent title="About Us" titleName="WHY CHOOSE US"/>
        {
          aboutContentDatas.map((aboutContentData, index) => (
            <AboutContentComponent
              key={index}
              imgAbout={aboutContentData.imgAbout} 
              titleAbout={aboutContentData.titleAbout}
              aboutText1={aboutContentData.aboutText1}
              aboutText2={aboutContentData.aboutText2}
            />
          ))
        }
      </SectionComponent>
      {/*  WHY CHOOSE US END */}
      
      {/* TODAY'S SPECIALITY section START */}
      <SectionComponent id="Menu" class="menu">
        <TitleComponent title="Our Menu" titleName="TODAY'S SPECIALITY"/>
        <BoxContainerComponent>
        {
          specContentDatas.map((specContentData, index) =>(
            <SpecContentComponent
                key={index}
                imgSpec={specContentData.imgSpec}
                titleSpec={specContentData.titleSpec}
                specText={specContentData.specText}
                specPrice={specContentData.specPrice}
            />
          ))
        }
        </BoxContainerComponent>
      </SectionComponent>
      {/* TODAY'S SPECIALITY section END */}
      
      {/* REVIEW section START */}
      <SectionComponent id="Review" class="review">
        <TitleComponent title="Customer's Review" titleName="WHAT THEY SAY"/>
        <Swiper modules={[ Autoplay ]}
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                  delay:8000,
                  disableOnInteraction:false
                }}
                loop={true}

                breakpoints={{
                  0:{
                    slidesPerView:1,
                  },
                  640:{
                    slidesPerView:2,
                  },
                  768:{
                    slidesPerView:2,
                  },
                  1024:{
                    slidesPerView:3,
                  }
                }}
                className="mySwiper">
          {
            reviewContentDatas.map((reviewContentData, index) => (
              <SwiperSlide>
                <ReviewContentComponent 
                  key={index}
                  imgPer={reviewContentData.imgPer}
                  namePer={reviewContentData.namePer}
                  reviewText={reviewContentData.reviewText}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </SectionComponent>
      {/* REVIEW section END */}

      {/* ORDER SECTION START */}
      <SectionComponent id="Order" class="order">
        <TitleComponent title="Order Now" titleName="FREE AND FAST"/>
        
        <FormComponent>
          {
            orderContentDatas.map((orderContentData, index) => (
              <InputContentComponent
                key={index}
                input1={orderContentData.input1}
                input2={orderContentData.input2}
              />
            ))
          }
          <ButtonComponent btnMove btnSubmit/>
        </FormComponent>

      </SectionComponent>
      {/* ORDER SECTION END */}
      
      <SectionComponent class="footer">
          <FooterComponent 
            dataFooters={footerContentDatas}
            footerVerData={footerVerData}
          />
      </SectionComponent>
        
      <LoaderComponent 
            loaderGif={loaderGif} 
            loadOut={loadOut}
      />
    </GlobalStyle>
  );
}

export default App;
