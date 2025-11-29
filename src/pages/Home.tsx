import type { JSX } from "react";
 

export default function Home(): JSX.Element {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="relative z-20 flex flex-col items-center justify-end h-full pb-40 text-center text-orange-800 ">
        <h1 className="text-5xl font-bold mb-4">Welcome to our Fashion House</h1>
            <div className="flex flex-col items-center text-center gap-15 mt-6">
                <img
                    src="/FashionHomeFoto.png"
                    alt="FotoFachionHome"
                    className="w-3/4 max-w-2xl rounded-xl shadow-lg"/>
            
         <p className="text-3xl font-bold max-w-xl">
          From now on, it is also your home, where you will find everything that inspires!
        </p>
        </div>
      </div>
    </section>
  );
}