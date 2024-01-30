"use client"

import { useRouter, redirect } from "next/navigation";
import { Carattere } from "next/font/google";

// Typographie Google Fonts
const carattere = Carattere({
  subsets: ["latin"],
  weight: "400"
});


export default function Login() {
  const router = useRouter();

  // Réponse attendue
  const userResponse: string = "Paulette";

  // Vérification de la réponse
  const verifyToken = (e:any) => {
    const response = document.getElementById(
      "response-auth"
    ) as HTMLInputElement;
    const responseValue: string = response.value.toLocaleLowerCase();

    if (responseValue === userResponse.toLowerCase()) {
      if (typeof window !== "undefined") {
        localStorage.setItem("user", "verified");
        e.preventDefault();
        router.push("/home");
      }
    };
  };

  return (
    <main>
      <div 
        className="flex items-center justify-center min-h-screen p-4 bg-cover text-slate-900" 
        style={{backgroundImage: `url("/bg-hearts.avif")`}}
      >
        <div className="bg-purple-50 px-4 py-8 rounded-xl shadow-md">
          {/* div pour la typo */}
          <div className={carattere.className}>
            <h1 className="text-center text-3xl mb-5">Bonjour Marie</h1>
          </div>
          {/* Fin div pour la typo */}
          <h2 className="text-center">
            Pour découvrir la suite je vais te demander à répondre à une question :
          </h2>
          {/* Question */}
          <h3 className="text-center rounded py-5 text-red-500 font-medium">
          Comment s’appelle l’endroit où nous avons partagé notre tout premier verre en tête-à-tête ?
          </h3>
          {/* Fin Question */}
          <form action="" onSubmit={verifyToken} className="flex flex-col items-center">
            <input  
              type="text" 
              id="response-auth" 
              className="bg-rose-50 border border-rose-100 w-full h-10 rounded mb-4" 
            />
            <p className="mb-3 text-xs">
              Oh-là-là est-ce que j’ai deviné..? 😰
            </p>
            <button type="submit" className="bg-red-500 px-8 py-2 rounded text-white font-semibold active:scale-110">
              Voir la suite 👀
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
