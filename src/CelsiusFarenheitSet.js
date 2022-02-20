import React, { useState } from "react";
import "./App.css";

export default function CelsiusFarenheitSet(props) {
  const [unit, setUnit] = useState("metrics");
  let temperature = props.celsius;

  function showTemperature(event) {
    event.preventDefault();
    setUnit("metrics");
  }

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  let buttonSet = (
    <div className='button-set'>
      <button className='celsius' onClick={showTemperature}>
        C
      </button>
      <button className='farenheit' onClick={showFarenheit}>
        F
      </button>
    </div>
  );

  if (unit === "metrics") {
    return (
      <div>
        <div className='temperature'>
          {Math.round(temperature)}
          <span className='metrics'>°C</span>
        </div>
        {buttonSet}
      </div>
    );
  } else {
    let farenheit = (temperature * 9) / 5 + 32;

    return (
      <div>
        <div className='temperature'>
          {Math.round(farenheit)}
          <span className='imperial'>°F</span>
        </div>
        {buttonSet}
      </div>
    );
  }
}
