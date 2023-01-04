import React, { useContext } from "react";
import { Context } from "./context/Context";
import { OperatorBtn } from "./components/OperatorBtn";
import { DigitBtn } from "./components/DigitBtn"

function App() {
  const { createDigits, operatorStyle, digitStyle, calc, result } = useContext(Context);

  /**
   * Styles: 
   * primary: #d81e5b
   * secondary: #131a26
   * dark: #131a26
   * light: #eee
   */


  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white rounded-[16px] overflow-hidden shadow-[0_2px_64px_rgba(0,0,0,0.2)]">
        <div className="p-4 text-right bg-[#131a26] text-[#eee] text-2xl font-light">
           { result ? <span className="text-sm text-[#888]">(0)</span> : "" }
           { calc || "0"}
        </div>

        <div className="flex">
          <OperatorBtn operator="/" style={operatorStyle}></OperatorBtn>
          <OperatorBtn operator="*" style={operatorStyle}></OperatorBtn>
          <OperatorBtn operator="+" style={operatorStyle}></OperatorBtn>
          <OperatorBtn operator="-" style={operatorStyle}></OperatorBtn>

          <OperatorBtn operator="DEL" style={operatorStyle}></OperatorBtn>
        </div>

        <div className="flex flex-wrap">
          {createDigits()}
          <DigitBtn dig="0" style={digitStyle}></DigitBtn>
          <DigitBtn dig="." style={digitStyle}></DigitBtn>

          <DigitBtn dig="=" style={digitStyle}></DigitBtn>
        </div>
      </div>
    </div>
  )
}

export default App;
