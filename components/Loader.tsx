import Lottie from "lottie-react";
import AnimLoading from "../public/animation-loading.json";

export default function Loader() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover relative"
      // style={{
      //     background: `linear-gradient(0deg, rgba(233,242,251,1) 0%, rgba(254,232,234,1) 100%)`,
      // }}
      style={{ backgroundImage: `url('/bg-hearts.jpg')` }}
    >
      <Lottie animationData={AnimLoading} loop={false} className="w-full" />
    </div>
  );
}
