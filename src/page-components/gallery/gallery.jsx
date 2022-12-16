import React from 'react';
import "./gallery.scss"
import Carousel from '../../components/shared/carousel/carousel';
import ImageGallery1 from '../../assets/gallery images/gallery1.png';
import ImageGallery2 from '../../assets/gallery images/gallery2.png';
import ImageGallery3 from '../../assets/gallery images/gallery3.png';
import ImageGallery4 from '../../assets/gallery images/gallery4.png';
import ImageGallery5 from '../../assets/gallery images/gallery5.png';
import ImageGallery6 from '../../assets/gallery images/gallery6.png';

const Gallery = () => {
    const imagesObj=[{ImageGallery1},{ImageGallery2},{ImageGallery3},{ImageGallery4},{ImageGallery5},{ImageGallery6}];

    let images=[];
    let tempvar;
    
    imagesObj.forEach((item , ind) => {
        tempvar = item[`ImageGallery${ind+1}`];
        images.push(tempvar)
        ind++;
    });

    
    

    return(
        <div className='gallery-page' id="gallery">
            <h1>Galería</h1>
            <p className="descr-gallery">Entra y elige la que mejor se adapte a tus necesidades y a tus sueños.</p>
            <Carousel
                array={images}
            ></Carousel>
        </div>
    )
}
export default Gallery