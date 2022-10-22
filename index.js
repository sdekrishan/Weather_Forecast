let key="28224cd72682df30bdd42d6bc74702db"
let container=document.querySelector("#container");
let data;
async function getWeather(){

    try{
        let city=document.querySelector("#city").value;

        let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    
        data=await res.json();
        appenddata(data)
        console.log(data);
    }

    catch(err){
        console.log(err);
    }
    
}

//for default properties 


let obj;

async function Weather(){

    try{
        let city=document.querySelector("#city").value;

        let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bahadurgarh&appid=${key}&units=metric`)
    
        obj=await res.json();
        ourdefault(obj)
        console.log(obj);
    }

    catch(err){
        console.log(err);
    }
    
}


Weather()


function ourdefault(obj){
    let month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date=document.getElementById('date');
    let today= new Date();
    date.innerHTML=`${today.getDate()}, ${month[today.getMonth()]}, ${today.toLocaleTimeString()}`
    
    let cname=document.getElementById('name');
    
    cname.innerText=`${obj.name}, ${obj.sys.country}`

    let temp=document.getElementById('temp');
    
    temp.innerText=`${obj.main.temp}\u00B0C `;

    let hum=document.getElementById('hum');
   
    hum.innerText=`Humidity - ${obj.main.humidity}%`

    let press=document.getElementById('press');

    let feel=document.getElementById('feel');
    feel.innerText=`feels like ${obj.main.feels_like}\u00B0C, ${obj.weather[0].main}, ${obj.weather[0].description}`
    
    let visi=document.getElementById('visi');
    visi.innerText=`Visibility-${obj.visibility/1000} Km`

    let mintemp=document.getElementById('mintemp');
    mintemp.innerText=`Min Temp-${obj.main.temp_min}\u00B0C`;

    let maxtemp=document.getElementById('maxtemp');
    maxtemp.innerText=`Max Temp-${obj.main.temp_max}\u00B0C`

    press.innerText=`Pressure - ${obj.main.pressure}pa`


}

function appenddata(data){
    
    let month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date=document.getElementById('date');
    let today= new Date();
    date.innerHTML=`${today.getDate()}, ${month[today.getMonth()]}, ${today.toLocaleTimeString()}`


    let name=document.getElementById('name');
    name.innerText=`${data.name}, ${data.sys.country}`

    let temp=document.getElementById('temp');
    temp.innerText=`${data.main.temp}\u00B0C`

    let hum=document.getElementById('hum');
    hum.innerText=`Humidity - ${data.main.humidity}%`

    let press=document.getElementById('press');

    let feel=document.getElementById('feel');
    feel.innerText=`feels like ${data.main.feels_like}\u00B0C, ${obj.weather[0].main}, ${obj.weather[0].description}`
    
    let visi=document.getElementById('visi');
    visi.innerText=`Visibility-${data.visibility/1000} Km`

    let mintemp=document.getElementById('mintemp');
    mintemp.innerText=`Min Temp-${data.main.temp_min}\u00B0C`;

    let maxtemp=document.getElementById('maxtemp');
    maxtemp.innerText=`Max Temp-${data.main.temp_max}\u00B0C`

    press.innerText=`Pressure - ${data.main.pressure}pa`



    //appending a map

    document.querySelector("#gmap_canvas").src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}


let today= new Date();
console.log(today.toLocaleString(1659572108));