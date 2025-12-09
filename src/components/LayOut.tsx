import type { JSX } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
 

 export default function LayOut(): JSX.Element {
  return (
   <div
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url(./willow2.jpg)" }}
>
  <div className="fixed top-0 left-0 w-full z-50">
    <NavBar />
  </div>

  <main className="w-full max-w-6xl mx-auto pt-24"> 
    <Outlet />
  </main>
</div>
  );
}