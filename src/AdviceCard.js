import React, { useState, useEffect } from "react";
import DividerDesktop from "./images/pattern-divider-desktop.svg";
import DividerMobile from "./images/pattern-divider-mobile.svg";
import Dice from "./images/icon-dice.svg";
import axios from "axios";

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#323A49] h-fit w-[90%] md:w-1/3 p-8 rounded-2xl">
      <h1 className="text-[#52FFA8] text-xs md:text-base mt-4 tracking-[.25em]">
        ADVICE #{advice.id}
      </h1>

      <p className="text-xl md:text-3xl font-bold  text-[#CEE3E9] text-center my-8">
        "{advice.advice}"
      </p>
      <img
        className="mb-8 mt-4 hidden md:block"
        alt="divider"
        src={DividerDesktop}
      />
      <img className="mb-8 mt-4 md:hidden" alt="divider" src={DividerMobile} />
      <div
        className="flex items-center justify-center bg-[#52FFA8] h-16 w-16 rounded-full absolute bottom-[-30px] cursor-pointer hover:shadow-[0_0_40px_0_rgba(83,255,169,1)] transition ease-out duration-200"
        onClick={getAdvice}
      >
        <img className="dice" alt="dice" src={Dice} />
      </div>
    </div>
  );
};

export default AdviceCard;
