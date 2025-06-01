import { useEffect, useState, useRef } from 'react';
import './weather.css';
import SearchIcon from '@mui/icons-material/Search';

const allIcons = {
  "01d": "https://openweathermap.org/img/wn/01d@2x.png",
  "01n": "https://openweathermap.org/img/wn/01n@2x.png",
  "02d": "https://openweathermap.org/img/wn/02d@2x.png",
  "02n": "https://openweathermap.org/img/wn/02n@2x.png",
  "03d": "https://openweathermap.org/img/wn/03d@2x.png",
  "03n": "https://openweathermap.org/img/wn/03n@2x.png",
  "04d": "https://openweathermap.org/img/wn/04d@2x.png",
  "04n": "https://openweathermap.org/img/wn/04n@2x.png",
  "09d": "https://openweathermap.org/img/wn/09d@2x.png",
  "09n": "https://openweathermap.org/img/wn/09n@2x.png",
  "10d": "https://openweathermap.org/img/wn/10d@2x.png",
  "10n": "https://openweathermap.org/img/wn/10n@2x.png",
  "11d": "https://openweathermap.org/img/wn/11d@2x.png",
  "11n": "https://openweathermap.org/img/wn/11n@2x.png",
  "13d": "https://openweathermap.org/img/wn/13d@2x.png",
  "13n": "https://openweathermap.org/img/wn/13n@2x.png",
  "50d": "https://openweathermap.org/img/wn/50d@2x.png",
  "50n": "https://openweathermap.org/img/wn/50n@2x.png",
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();
  const [inputData, setInputData] = useState("");

  const search = async (city) => {
    if (city.trim() === "") {
      alert("Enter your city name");
      return;
    }

    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(URL);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: allIcons[data.weather[0].icon] || allIcons["01d"],
      });
    } catch (error) {
      setWeatherData(false);
      console.log("Error fetching data. Check your API key or network.");
    }
  };

  useEffect(() => {
    search("delhi");
  }, []);

  const handleOnChange = (e) => {
    setInputData(e.target.value);
  };

  const handleClick = () => {
    search(inputData);
  };

  return (
    <div className="body">
      <div className="weather">
        <div className="search-bar">
          <input
            type="text"
            value={inputData}
            onChange={handleOnChange}
            placeholder="Enter city search using target.value"
          />
          <button onClick={handleClick}><SearchIcon/></button>

          <input ref={inputRef} type="text" placeholder="Search with UseRef" />
          <img
            src="https://t3.ftcdn.net/jpg/05/99/84/86/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg"
            alt="search"
            onClick={() => {
              search(inputRef.current.value);
            }}
          />
        </div>

        {weatherData && (
          <>
            <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <p>{weatherData.windSpeed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;











// -------------------------------for Learning -------------------------------------------------------

// import { useEffect, useState , useRef } from 'react';
// import './weather.css'

// const Weather = () => {
//     const [weatherData , setWeatherData] = useState(false); //purpose for error handling if true  then fetch if api key is correct else false

//     const inputRef = useRef(); 


//     //  1?
//     const [inputData , setInputData] = useState("");



//     // import this icons and relate to provided weather codes
//     // const allIcons = {
//     //     "01d" : clear _icon,
//     //     "02d" : 
//     // }

//     const search = async (city) => {
//      //adding error 
//      if(city === ""){
//         alert(" Enter Your city name")
//         return;
//      }

//    //1
//         try{
//          const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

//          const response = await fetch(URL);
//          const data = await response.json();

//          if(!response.ok) {
//             alert(data.message);
//             return;
//          }
//          console.log(data);

//         //  const icon = allIcon[data.weather[0].icon] || if not found then this icon
    
//     //2   by studying api   storing data in weatherData in by creating object{ then in key : value pair }
//          setWeatherData({
//             humidity : data.main.humidity ,
//             windSpeed : data.wind.speed ,
//             temperature : Math.floor(data.main.temp) ,
//             location : data.name ,
//             // icon : data.weather.icon
//           })
//         }
//         catch (error){
//             setWeatherData(false);
//             console.log("error in fetching data correct your api if persist check anything else ")
//         }
       
        
//     }
//     //need to call search() fn whenever component get loaded using useEffect   
//     useEffect( () => {
//          search("delhi");
//          console.log(inputRef.current)
//         }, [])


 
//         // 4?
//          const handleonChange = (e) => {
//          setInputData(e.target.value);
//          console.log(inputData)
//          }
    
//          const handleClick = () => {
//             console.log(inputData)
//             search(inputData)
//          }
//     return (
//         <>
//         <div className="body">
//             <div className="weather">
//                 <div className="search-bar">

//                     <div className="try">
//                         {/* 2? */}
//                         <input type="text" value={inputData}  onChange={handleonChange} placeholder='enter try' />
//                        {/* 3? */}
//                         <button onClick={handleClick}>Search</button>
//                     </div>


//                     {/* 2 --> give reference here */}
//                     <input ref={inputRef} type="text" placeholder='search' />
//                     {/* left 13:00 */}
//                     <img 
//                     src="https://t3.ftcdn.net/jpg/05/99/84/86/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg"
//                      alt="" 
//                      onClick={ () => {
//                         search(inputRef.current.value)
//                     }} /> 
//                 </div>
//                {weatherData ? <>{/* <img src='' alt='' className='weather-icon'/> */}
//                 <p className='temperature'>{weatherData.temperature}</p>
//                 <p className='location'>{weatherData.location}</p>
//                 <div className="weather-data">
//                     <div className="col">
//                         {/* <img src="" alt="" /> */}
//                         <div className="">
//                             <p>{weatherData.humidity} %</p>
//                             <span>Humidity</span>
//                         </div>
//                     </div>
//                       <div className="col">
//                         {/* <img src="" alt="" /> */}
//                         <div className="">
//                             <p>{weatherData.windSpeed} Km/h</p>
//                             <span>Wind Speed</span>
//                         </div>
//                     </div>
                    
//                 </div> 
//                  </>   : <></> }
//                   {/* // blank means if false show nothing */}

                
//             </div>
//         </div>
//         </>
//     )
// }
// export default Weather