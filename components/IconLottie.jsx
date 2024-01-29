import Lottie from "lottie-react";


export default function IconLottie({ animation, text, customStyle }) {
    return (
        <div className="flex flex-col items-center justify-center h-fit">
            <Lottie animationData={animation} loop={true} className="h-32 w-32" style={customStyle} />
            <span>{text}</span>
        </div>
    )
}
