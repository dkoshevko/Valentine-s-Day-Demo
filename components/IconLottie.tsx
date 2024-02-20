import { CSSProperties, FC } from "react";
import Lottie from "lottie-react";

type IconLottieProps = {
  animation: any;
  text: string;
  customStyle: CSSProperties;
};

const IconLottie: FC<IconLottieProps> = ({ animation, text, customStyle }) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <Lottie
        animationData={animation}
        loop={true}
        className="h-32 w-32"
        style={customStyle}
      />
      <span>{text}</span>
    </div>
  );
};

export default IconLottie;
