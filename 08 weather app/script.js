const city = document.getElementById("city");
const today=document.getElementById("today")
const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const tmin = document.getElementById("tmin");
const tmax = document.getElementById("tmax");
//const main = document.getElementById("main");
const description = document.getElementById("description");



meteo(); //initial call


function meteo (){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Rome&units=metric&appid=cf150e476686ca429259931303991144")
    .then((response) => {
        if (response.ok) {
        return response.json();
        } 
        else {
        throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
    console.log(data);
    displayData(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function displayData(data){
    city.innerText=data.name;
    today.innerText=new Date().toDateString();

    icon.innerHTML='<img class="icona" src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png"></img>';
    temp.innerText=data.main.temp + "°C";

    //main.innerText=data.weather[0].main;
    tmin.innerText=data.main.temp_min + "°C";
    tmax.innerText=data.main.temp_max + "°C";
    description.innerText=data.weather[0].description;
    
    
    
}

//data.weather[0].icon;
//http://openweathermap.org/img/w/10d.png
//    .then(data => {
//    console.log(data);
 //   displayData(data);
//})