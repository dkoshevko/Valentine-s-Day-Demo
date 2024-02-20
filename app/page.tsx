"use client";

import { useRouter } from "next/navigation";
import { carattere } from "../env/fonts";


export default function Login() {
  const router = useRouter();

  // Expected response
  const userResponse: string = "Earth";

  // Checking the answer
  const verifyToken = (e: any) => {
    const response = document.getElementById(
      "response-auth"
    ) as HTMLInputElement;
    const responseValue: string = response.value.toLocaleLowerCase(); // Lowercase the answer to better manage authentication

    if (responseValue === userResponse.toLowerCase()) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("user", "verified");
        e.preventDefault();
        router.push("/home");
      }
    }
  };

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen p-4 bg-cover text-slate-900">
        <div className="bg-purple-50 px-4 py-8 rounded-xl shadow-md">
          {/* div for the Font */}
          <div className={carattere.className}>
            <h1 className="text-center text-3xl mb-5">
              Hello Honey
            </h1>
          </div>
          {/* END div for the Font */}
          <h2 className="text-center">
            To find out what happens next, please answer the question below:
          </h2>
          {/* Question */}
          <h3 className="text-center rounded py-5 text-red-500 font-medium">
            On what planet did we meet?
          </h3>
          {/* END Question */}
          <form onSubmit={verifyToken} className="flex flex-col items-center">
            <input
              type="text"
              id="response-auth"
              className="bg-rose-50 border border-rose-100 w-full h-10 rounded mb-4"
            />
            <p className="mb-3 text-xs">Oh my, did I guess...? 😰</p>
            <button
              type="submit"
              className="bg-red-500 px-8 py-2 rounded text-white font-semibold active:scale-110"
            >
              See next 👀
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
