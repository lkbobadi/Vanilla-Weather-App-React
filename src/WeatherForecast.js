import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecast() {
  return (
    <div className='WeatherForecast'>
      <div className='row'>
        <div className='day col-2'>
          <div>Thu</div>
          <WeatherIcon code='01d' size={40} />
          <div className='temp-maxmin'>
            <span className='temp-max'>19°</span>{" "}
            <span className='temp-min'>10°</span>
          </div>
        </div>

        <div className='day col-2'>
          <div>Thu</div>
          <WeatherIcon code='01d' size={40} />
          <div className='temp-maxmin'>
            <span className='temp-max'>19°</span>{" "}
            <span className='temp-min'>10°</span>
          </div>
        </div>

        <div className='day col-2'>
          <div>Thu</div>
          <WeatherIcon code='01d' size={40} />
          <div className='temp-maxmin'>
            <span className='temp-max'>19°</span>{" "}
            <span className='temp-min'>10°</span>
          </div>
        </div>

        <div className='day col-2'>
          <div>Thu</div>
          <WeatherIcon code='01d' size={40} />
          <div className='temp-maxmin'>
            <span className='temp-max'>19°</span>{" "}
            <span className='temp-min'>10°</span>
          </div>
        </div>

        <div className='day col-2'>
          <div>Thu</div>
          <WeatherIcon code='01d' size={40} />
          <div className='temp-maxmin'>
            <span className='temp-max'>19°</span>{" "}
            <span className='temp-min'>10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
