
// Typographie Google Fonts
import { Carattere, Raleway } from "next/font/google";
const carattere = Carattere({
    subsets: ["latin"],
    weight: "400"
});
const raleway = Raleway({ subsets: ["latin"] });


export default function Introduction() {
    return (
        <div className="text-justify pt-10 px-3 mb-20 md:px-96">
            <span className={carattere.className}>
                <h1 className="text-5xl mb-7">
                    Bienvenue Marie
                </h1>
            </span>
            <span className={raleway.className}>
                <p className="mb-3">
                    Tu es arrivée dans ce petit coin numérique dédié à l’amour et à la célébration de notre histoire unique. Ce site est une humble expression de mes sentiments les plus profonds pour toi, une manière de capturer et de partager les moments magiques qui ont façonné notre relation. Chaque image, chaque mot, est une étreinte virtuelle qui symbolise l’affection que je porte à notre histoire commune. Puisses-tu ressentir la chaleur de mon amour à travers cette page et réaliser la beauté de notre voyage ensemble.
                </p>
                <p className="font-medium text-lg">Joyeuse Saint-Valentin, mon amour 😘</p>
            </span>
        </div>
    )
}