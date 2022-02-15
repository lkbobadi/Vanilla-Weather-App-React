import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className='container '>
      <div className='weather-app mt-5'>
        <form className='search-weather'>
          <input text='search' id='search' placeholder='Search a city...' />
          <input type='submit' value='Search' id='submit' />
        </form>
        <div className='row'>
          <ul className='today-extra-info col-1'>
            <li>Wednesday</li>
            <li>Sunny</li>
            <li>3:40PM</li>
          </ul>
        </div>

        <div className='main-information'>
          <h1 className='city'>New York</h1>
          <div className='icon'>SUN</div>
          <div className='button-set'>
            <button className='celsius'>C</button>
            <button className='farenheit'>F</button>
          </div>
        </div>
        <div className='weather-extra-information  mb-5'>
          <li>Humidity</li>
          <li>Wind</li>
          <li>Pressure</li>
        </div>
        <div className='forecast'>
          Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
        </div>
      </div>
    </div>
  );
}
