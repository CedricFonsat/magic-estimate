import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Home from "./screens/Home";
import Modal from "./components/Modal";

function App() {

 // State pour suivre si c'est un desktop
 const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1051);

 // Fonction pour vérifier si la largeur de la fenêtre est >= 1051
 const checkIsDesktop = () => {
   return window.innerWidth >= 1051;
 };

 useEffect(() => {
   // Fonction de gestion de l'événement resize
   const handleResize = () => {
     setIsDesktop(checkIsDesktop());
   };

   // Ajouter l'écouteur d'événement resize
   window.addEventListener('resize', handleResize);

   // Vérifier initialement
   handleResize();

   // Nettoyer l'écouteur d'événement resize
   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);

  return (
    <div className="bg-neutral-950 h-min-screen">
       <Navbar />
      {isDesktop ? 
      <>
      <Header />
      <Home />
      <Modal />
      </>
      : 
      <>
       <div className="max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent text-white text-center font-sans font-bold">
      Magic Estimate only works on desktop at the moment
      </h1>
    </div>
      </>}
    </div>
  )
}

export default App;