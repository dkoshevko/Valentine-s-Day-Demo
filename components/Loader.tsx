import Lottie from "lottie-react";
import AnimLoading from "../public/animation-loading.json";

export default function Loader() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover relative"
      style={{ backgroundImage: `url('/bg-hearts.jpg')` }}
    >
      <Lottie animationData={AnimLoading} loop={false} className="w-full" />
    </div>
  );
}
