import React from 'react';
import { useState } from 'react';
import "../carousel/carousel.scss"
import ReactSimplyCarousel from 'react-simply-carousel';

const Carousel = (props) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    return (
        <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        showSlidesBeforeInit={true}
        containerProps = {{
            className: "container-carousel",
            style: {
                paddingTop: '50px',
                overflow: 'visible!important',
            },
        }}
        innerProps = {{
            className: "inner-carousel",
        }}
        visibleSlideProps= {{
          className: "visible-slides",
            style: {
                overflow: 'visible!important',
            },
        }}
        forwardBtnProps={{
            className:"carousel-buttons carousel-buttons-right",
          //here you can also pass className, or any other button element attributes
          style: {
            position: 'relative',
            alignSelf: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '40px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            zIndex: "99",
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
            className:"carousel-buttons carousel-buttons-left",
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '40px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            zIndex: "99",
            
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 6,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >

        
        {props.array.map((item)=> 
            <div>
                <img src={item} alt="img gallery" className="images-gallery"/>
            </div>
        )}
        <div></div>
        



      </ReactSimplyCarousel>
    )
}
export default Carousel