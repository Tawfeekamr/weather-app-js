// // Fetch
// // then (Ok)
// // catch (Error)


// // GET Retrieve data

// // POST send data

// // DELETE delete data

// // PUT edit data

// const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"; // Weather API
// const API_KEY= "3f5ff926cff0613f7c4146c309237196"; //  Weather API
// let lat = 32.058881; // Google 31.86640 32.0588865 40.71765351717364, -73.99202943271106
// let lon = 36.126021; // Google 35.93848 36.1240745 38.40441878304273, -82.4344035485955


// axios.get(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
//     .then((response) => {
//         // console.log("response", response)
//     localStorage.setItem("weather", JSON.stringify(response.data))
// }).catch((err)=> {
//     console.error("ERROR",err)
// })


// const weatherData = JSON.parse(localStorage.getItem("weather"));

// const tempElement = document.getElementById("temp");
// const cityElement = document.getElementById("city");
// const sunset = document.getElementById("sunset");
// const sunrise = document.getElementById("sunrise");
// const weatherIcon = document.getElementById("weather-icon");
// const haze = document.getElementById('haze')

// tempElement.innerHTML = weatherData.main.temp+ " C";
// cityElement.innerHTML = weatherData.name;

// // sunset.innerHTML = moment.unix(weatherData.sys.sunset).format("LT");
// // sunrise.innerHTML = moment.unix(weatherData.sys.sunrise).format("LT");
// weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`
// haze.innerHTML = weatherData.weather[0].description;




// console.log(weatherData )

// function kToC(temp) {
//     // tempElement.innerHTML =weatherData.main.temp+ " C";
//     return `${(temp - 273.15).toFixed(2)} °C`
// }

// function CToK(temp){
//     tempElement.innerHTML =weatherData.main.temp+ " C";
//     return `${(temp +273.15).toFixed(2)} K`
// }







































// Fetch
// then (Ok)
// catch (Error)


// GET Retrieve data

// POST send data

// DELETE delete data

// PUT edit data

let lat = ""; // Google 31.86640 32.0588865 40.71765351717364, -73.99202943271106
let lon = ""; // Google 35.93848 36.1240745 38.40441878304273, -82.4344035485955
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"; // Weather API
const API_KEY= "3f5ff926cff0613f7c4146c309237196"; //  Weather API
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("location",  position.coords.latitude, position.coords.longitude);
            lat = position.coords.latitude;
            lon = position.coords.longitude;

            axios.get(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
                .then((response) => {
                    // console.log("response", response)
                    localStorage.setItem("weather", JSON.stringify(response.data))
                }).catch((err)=> {
                console.error("ERROR",err)
            })
        });
    } else {
       alert("Geolocation is not supported by this browser.")
    }
}

getLocation()



const weatherData = JSON.parse(localStorage.getItem("weather"));

const tempElement = document.getElementById("temp");
const cityElement = document.getElementById("city");
const sunset = document.getElementById("sunset");
const sunrise = document.getElementById("sunrise");
const weatherIcon = document.getElementById("weather-icon");
const haze = document.getElementById('haze')


tempElement.innerHTML =`<span id="tempdata">${weatherData.main.temp}</span> <span id="degree">°C</span>`;
cityElement.innerHTML = weatherData.name + `, ${weatherData.sys.country}`
;

// sunset.innerHTML = moment.unix(weatherData.sys.sunset).format("LT");
// sunrise.innerHTML = moment.unix(weatherData.sys.sunrise).format("LT");
weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`
haze.innerHTML = weatherData.weather[0].description;



// console.log(weatherData )

let tempctok =  document.getElementById("tempdata")
let degree = document.getElementById("degree")

function CToK(){
    // tempElement.innerHTML =weatherData.main.temp+ " K";
    // return`${(temp +273.15).toFixed(2)} K` 
    // console.log(tempElement.innerText)
  
//    return`${(tempctok +273.15).toFixed(2)}` 
if(degree.innerText === "°C"){
    degree.innerHTML = '°K'
    tempctok.innerHTML =  (+tempctok.innerText + 273.15).toFixed(2)
}else if(degree.innerText === "°K"){
    degree.innerHTML = '°C'
    tempctok.innerHTML =  (+tempctok.innerText - 273.15).toFixed(2)

}else if(degree.innerText === "°F"){
    degree.innerHTML = '°C'
    tempctok.innerHTML =  (+(tempctok.innerText - 32) * 5/9).toFixed(2)


}
 }

function cToF(){
    if(degree.innerText === "°C"){
        degree.innerHTML = "°F"
        tempctok.innerHTML = +((tempctok.innerText * 9/5) + 32).toFixed(2)
    } else if (degree.innerText === "°F"){
        degree.innerHTML = "°K"
        tempctok.innerHTML = (+(tempctok.innerText - 32) * 5/9 + 273.15).toFixed(2)
    }else if(degree.innerText === "°K"){
        degree.innerHTML = "°F"
        tempctok.innerHTML = (+(tempctok.innerText - 273.15) * 9/5 + 32).toFixed(2)

    }
    
}

// function kToC(temp) {
//     tempElement.innerHTML =weatherData.main.temp+ " C";
//     return `${(temp - 273.15).toFixed(2)} °C`
// }
// tempElement.innerHTML =weatherData.main.temp+ " F";
//     return`${(temp - 273.15) * 9/5 + 32}` 