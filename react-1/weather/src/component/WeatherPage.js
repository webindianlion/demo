import React, { useEffect, useState } from "react";

const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatheState] = useState("");
  const [localData, setLocalData] = useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;



  const [sss, setSss ] = useState({base:"aaa"}); 
    const fdata = async () => {
      console.log(sss) 
      let uurl = `https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=a59df72c65da505a0c282725e9a307c7`;
      let dataa = await fetch(uurl);
       dataa = await dataa.json();
      setSss(dataa)
      console.log(sss)
    }
  
  return (
    <>
    <p className="text-white">Temp {sss.base}</p>
      <article className="widget">
        <div className="weatherIcon">weatherState
          <i className={`wi ${weatherState}` } onClick={fdata}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">temp <span>{temp}&deg;</span> </div>

          <div className="description">
            <div className="weatherCondition">weathermood {weathermood}</div>
            <div className="place"> {name}, {country} </div>
          </div>
        </div>

        <div className="date"> Date {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p> <i className={"wi wi-sunset"}></i> </p>
              <p className="extra-info-leftside"> {timeStr} PM <br /> Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p> <i className={"wi wi-humidity"}></i></p>
              <p className="extra-info-leftside"> {humidity} <br /> Humidity </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p> <i className={"wi wi-rain"}></i> </p> 
              <p className="extra-info-leftside"> {pressure} <br /> Pressure </p>
            </div>

            <div className="two-sided-section">
              <p> <i className={"wi wi-strong-wind"}></i> </p>
              <p className="extra-info-leftside"> {speed} <br /> Speed </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
