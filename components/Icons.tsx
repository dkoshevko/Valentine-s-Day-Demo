import IconLottie from "./IconLottie";
import TextReveal from "./TextReveal";

import Christmas from "../public/lottie/christmas-lottie.json";
import Cinema from "../public/lottie/cinema-lottie.json";
import Facetime from "../public/lottie/facetime-lottie.json";
import Games from "../public/lottie/game-lottie.json";
import Museum from "../public/lottie/museum-lottie.json";
import Roadtrip from "../public/lottie/roadtrip-lottie.json";
import Rollercoaster from "../public/lottie/rollercoaster-lottie.json";


export default function Icons() {

    return(
        <div className="mb-14">
            <h2 className="text-xl font-medium text-justify px-2 mb-5">
                Depuis, nous avons vécu beaucoup de choses :
            </h2>
            <div className="flex flex-wrap items-end justify-center gap-x-6 gap-y-3 text-sm mb-10">
                <IconLottie animation={Cinema} text={"Plein de films"} customStyle={{ scale: 1.4 }} />
                <IconLottie animation={Facetime} text={"Des heures d'appels"} customStyle={{ scale: 1.3 }} />
                <IconLottie animation={Rollercoaster} text={"Variété de sensations"} customStyle={{ scale: 1.2 }} />
                <IconLottie animation={Games} text={"Multitude de jeux"} customStyle={{ scale: 1.4 }} />
                <IconLottie animation={Museum} text={"Des visites culturelles"} customStyle={{ scale: 0.8 }} />
                <IconLottie animation={Christmas} text={"Des fêtes"} customStyle={{}} />
                <IconLottie animation={Roadtrip} text={"Beaucoup de km parcourus"} customStyle={{}} />
            </div>
            <div className="flex justify-center text-2xl font-medium">
                <TextReveal text="Et tant d'autres..." />
            </div>
        </div>
    )
}