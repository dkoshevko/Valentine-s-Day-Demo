import Lottie from "lottie-react";
// Loading lottie animation
import AnimLoading from "../public/lottie/loading-lottie.json";


export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover relative">
      <Lottie animationData={AnimLoading} loop={false} className="w-full" />
    </div>
  );
}
