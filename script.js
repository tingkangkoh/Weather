




let filterData=function(data){
    let filteredData={
        temp:Math.round(data.main.temp * 10) / 10,
        condition:data.weather[0].main,
        humidity:data.main.humidity,
        feels:data.main.feels_like,
        city:data.name,
        country:data.sys.country,
        icon:data.weather[0].icon
    }

    return filteredData;
}

let printData=function(data){

    let container=document.querySelector(".container");
    container.style.display="block";

    let city=document.querySelector(".city");
    let temperature=document.querySelector(".temperature");
    let humidity=document.querySelector(".humidity");
    let feels=document.querySelector(".feels");


    city.textContent=data.city+","+data.country;

    temperature.textContent=data.temp;
    humidity.textContent=data.humidity;
    feels.textContent=data.feels;

    let divIcon=document.querySelector(".icondiv");
    divIcon.innerHTML="";
    let icon=document.createElement("img");
    icon.src=`http://openweathermap.org/img/wn/${data.icon}@2x.png`;
    divIcon.appendChild(icon);
    let condition=document.createElement("p");
    condition.classList.add("condition");
    condition.textContent=data.condition;
    divIcon.appendChild(condition);

    container.appendChild(divIcon);
}

async function getWeather(city){
    let result= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1c5fa6daf029137d593d99ac9e94ccc6&units=metric`, {mode: 'cors'})
    let data=await result.json();

    let filteredData=filterData(data);
    printData(filteredData);

}

let searchButton=document.getElementById("search");
searchButton.addEventListener("click",function(e){
    e.preventDefault();
    console.log("hit");
    let city=document.getElementById("city").value;
    getWeather(city);
})

//getWeather("Hong Kong");




