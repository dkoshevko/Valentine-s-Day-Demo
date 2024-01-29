import TextReveal from "./TextReveal";


export default function DownloadButton() {

    function handleClick() {
        let button = document.getElementById("touch-me") as HTMLElement;
        let progress = document.getElementById("progress-container") as HTMLElement;

        button.classList.add("hidden");
        progress.classList.remove("hidden");
        progressBar();
    };

    function progressBar() {
        const progress = document.getElementById("progress-container") as HTMLElement;
        const result = document.getElementById("progress-result") as HTMLElement;
        const bar = document.querySelector("#progress-fill") as HTMLElement;
        const loader = document.querySelector("#progress-text") as HTMLElement;

        let load = 0;
        // Progression pf progress bar
        setInterval(() => {
            load = load + Math.floor(Math.random() * 5 + 1);
            if (load < 100) {
                loader.textContent = load + "%";
                bar.style.transform = `scalex(${load}%)`;
            } else {
                bar.style.transform = `scalex(100%)`;
                loader.textContent = "100%";
            }
        }, 90);
        // Wait before hide progress bar
        setTimeout(() => {
            progress.classList.add("hidden");
            result.classList.remove("hidden");
        }, 4500);
    };


    return (
        <div className="w-full h-28 mb-5 flex justify-center items-center">
            <div 
                id="touch-me"
                className="bg-red-500 py-4 px-8 rounded-full text-white shadow-xl cursor-pointer text-xl active:scale-90" 
                onClick={handleClick}
            >
                Touche-moi 😋
            </div>
            <div id="progress-container" className="w-60 hidden flex flex-col justify-center items-center">
                <div id="progress-bar" className="w-full h-7 bg-slate-100 flex items-center relative shadow-2xl shadow-red-500">
                    <div id="progress-fill" className="absolute w-full h-full bg-red-500 bg-gradient-to-r from-pink-300 to-red-500"></div>
                    <div id="progress-text" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold"></div>
                </div>
            </div>
            <div id="progress-result" className="hidden text-sm bg-white p-4">
                <TextReveal text="Félicitations !" />
                <TextReveal text="Tu es bien téléchargée dans mon ❤️ !" />
            </div>
        </div>
    )
}