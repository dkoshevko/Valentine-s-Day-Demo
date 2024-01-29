import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";


export default function PhotoSlider({ photos }) {

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
        <div className="flex flex-col justify-center items-center mb-5">
            <h2 className="text-xl font-medium text-justify leading-none px-2 mb-5">
                Même si on ne pense pas souvent à prendre des photos tellement nous sommes concentrés l’un sur l’autre et qu’on profite du moment présent, nous avons quand même réussi à en collecter quelques-unes.
            </h2>
            <Carousel 
                images={photos} 
                style={carouselStyles}
                objectFit="contain" 
                className="rounded-md overflow-hidden"
                shouldLazyLoad={true} 
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
                    <i className="fa-solid fa-expand text-white text-xl mr-2"></i>
                } 
                minIcon={
                    <i className="fa-solid fa-compress text-white text-xl mr-2"></i>
                } 
                pauseIcon={
                    <i className="fa-solid fa-pause text-white text-3xl ml-2"></i>
                } 
                playIcon={
                    <i className="fa-solid fa-play text-white text-3xl ml-2"></i>
                }
            />
        </div>
    )
}