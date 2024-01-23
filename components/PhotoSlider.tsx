import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import photosArray from "../app/home/photosArray";


export default function PhotoSlider() {

    const determineStyles = () => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth <= 640) {
            return {
                width: 350,
                height: 200,
            };
        } else {
            return {
                width: 600,
                height: 300,
            };
        }
    };

    const carouselStyles = determineStyles();

    return (
        <div>
            <h3>Nous avons un petit album photo.</h3>
            <Carousel 
                images={photosArray} 
                style={carouselStyles}
                objectFit="contain" 
                className="rounded-md overflow-hidden"
                isAutoPlaying={true} 
                hasThumbnails={false} 
                hasIndexBoard={false} 
                hasSizeButton="bottomRight" 
                hasMediaButton="bottomLeft" 
                hasRightButton={false} 
                hasLeftButton={false} 
                shouldMaximizeOnClick={true} 
                shouldMinimizeOnClick={true} 
                hasRightButtonAtMax="centerRight" 
                hasLeftButtonAtMax="centerLeft" 
                leftIcon={
                    <i className="fa-solid fa-chevron-left text-white text-4xl ml-2"></i>
                } 
                rightIcon={
                    <i className="fa-solid fa-chevron-right text-white text-4xl mr-2"></i>
                } 
                maxIcon={
                    <i className="fa-solid fa-expand text-white text-xl mr-1"></i>
                } 
                minIcon={
                    <i className="fa-solid fa-compress text-white text-xl mr-1"></i>
                } 
                pauseIcon={
                    <i className="fa-solid fa-pause text-white text-3xl ml-1"></i>
                } 
                playIcon={
                    <i className="fa-solid fa-play text-white text-3xl ml-1"></i>
                }
            />
        </div>
    )
}