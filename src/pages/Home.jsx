import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [quotes, setQuotes] = useState("");

  // ---------------------------------------------------------------------------------------------

  const quotesApi = async () => {
    try {
      const resp = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await resp.json();
      const { advice } = slip;
      setQuotes(advice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quotesApi();
  }, []);

  // ------------------------------------------------------------------------------------------------

  const handleClick = () => {
    quotesApi();
    console.log(quotes);
  };

  // -------------------------------------------------------------------------------------------------

  const copyTextNotification = () => {
    toast.success("Texto copiado!", {
      duration: 2000,
      position: "top-center",
      style: {
        border: "3px solid #3337",
        padding: "12px",
        color: "#ffffff",
        backgroundColor: "rgba(67,33,202,0.6)",
        fontSize: "16px",
      },
      iconTheme: {
        primary: "#eeeeee",
        secondary: "#003300",
      },
    });
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("texto copiado");
    } catch (error) {
      console.log("error al copiar el texto");
    }
  };

  const handleClickCopyText = () => {
    copyText(quotes);
    copyTextNotification();
  };

  // ----------------------------------------------------------------------------------------------

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center gap-16">
        <div className="flex gap-12">
          <button
            onClick={handleClick}
            type="button"
            className="p-2 md:py-2 md:px-4 bg-green-800/60 text-white rounded-lg text-base md:text-xl border-2 border-gray-500"
          >
            Dame una frase
          </button>

          <button
            onClick={handleClickCopyText}
            type="button"
            className="p-2 md:py-2 md:px-4 bg-yellow-500/50 text-white rounded-lg text-base md:text-xl border-2 border-gray-500"
          >
            Copiar
          </button>
          <Toaster />
        </div>
        <div className="h-auto p-4 bg-gray-900/60 rounded-lg border-2 border-indigo-800 shadow-md shadow-gray-200">
          <p className="text-white font-bold text-xl md:text-2xl">{quotes}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
