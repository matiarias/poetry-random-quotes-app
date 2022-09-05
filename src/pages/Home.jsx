import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Home = () => {
  const [quotes, setQuotes] = useState([]);

  // -----------------------------------------------------------------------------------------------

  const quotesApi = async () => {
    try {
      const resp = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await resp.json();
      console.log(slip);
      setQuotes(slip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quotesApi();
  }, []);

  // ------------------------------------ función button quotes ----------------------------------------

  const handleClick = () => {
    quotesApi();
    // console.log(quotes);
  };

  // --------------------------- función button copiar text --------------------------------------------------

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
      // console.log("texto copiado");
    } catch (error) {
      console.log("error al copiar el texto");
    }
  };

  const handleClickCopyText = () => {
    copyText(quotes.advice);
    copyTextNotification();
  };

  // ----------------------------------------------------------------------------------------------

  return (
    <>
      <div className="relative min-h-screen w-full px-4 md:px-0 flex flex-col justify-center items-center gap-12 md:gap-8">
        <div className="flex gap-12">
          <motion.button
            whileTap={{ scale: 1.1 }}
            onClick={handleClick}
            type="button"
            className="p-2 md:py-2 md:px-4 bg-green-800/60 text-white rounded-lg text-base md:text-xl border-2 border-gray-500"
          >
            Dame una frase
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.1 }}
            onClick={handleClickCopyText}
            type="button"
            className="p-2 md:py-2 md:px-4 bg-yellow-500/50 text-white rounded-lg text-base md:text-xl border-2 border-gray-500"
          >
            Copiar
          </motion.button>
          <Toaster />
        </div>

        {/* --------------------------------------------------------------------------------------- */}

        <motion.div
          initial={{
            x: "-200%",
          }}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: "0.40",
          }}
          animate={{
            x: 0,
          }}
          className="h-[200px] w-full md:max-w-[700px] p-4 bg-gray-900/60 rounded-lg border-2 border-indigo-800 shadow-md shadow-gray-200"
        >
          <p className="text-yellow-400 font-bold text-base sm:text-xl md:text-2xl">
            {quotes.advice}
          </p>
        </motion.div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
