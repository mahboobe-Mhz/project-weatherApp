import { ElementGenerator } from "@/library"

export const SearchBox=()=>{
    const search =(ElementGenerator({
        element:"div",
        className:'flex items-center bg-white/50  w-[500px] gap-3 rounded-md px-1 py-1',
        child:[
           
            ElementGenerator({
                element:"span",
                className:" hydrated  text-xl",
                innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>`

            }), ElementGenerator({
                id:"search",
                element:"input",
                className:"bg-white/0 w-full focus:outline-none",
                placeholder:"search your city"
            }),ElementGenerator({
                element:"div",
                id:"searchBox",
                className:"mt-2 hidden  rounded-b-md shadow-md overflow-y-scroll divide-y absolute w-[500px] ml-1 top-[120px] right-[518px] bg-white"
            })
        ]
    }))
    async function weatherInfo(lon,lat) {

        try{
           const countryWeather=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d419ad719f8f55b5f423b32989242669`)
           const weather= await countryWeather.json()
           console.log(weather);
           cardWeather(weather)
          


       }catch(err){
           alert('failed to get country information' + err)
       }
   }
    async function countryInfo(name){
        try{
            const countryName=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=d419ad719f8f55b5f423b32989242669`)
            const countryData= await countryName.json()
            console.log(countryData[0].lat);
            
            weatherInfo(countryData[0].lon,countryData[0].lat)

        }catch(err){
            alert('failed to get country information' + err)
        }

    }
    search.querySelector("#search").addEventListener('input', e =>{
        const searchingBox=document.getElementById("searchBox")
        searchingBox.classList.remove('hidden');
    })
    search.querySelector("#search").addEventListener('change', e =>{

        const searchingBox=document.getElementById("searchBox")

        if (e.target.value.length < 3) return;
        searchingBox.innerHTML += `<p class="cursor-pointer px-1"> ${e.target.value}</p>`;
        countryInfo(e.target.value)
        document.body.addEventListener('click', () => {
            searchingBox.classList.add('hidden');
          });

    })
   
    function cardWeather(data) {
        const showWeather =document.getElementById("weather")
        console.log(data);
        showWeather.innerHTML=`<div class="bg-white/80 p-3 rounded-md flex">
        <img src="data:image/jpeg;base64,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">
        <div class="pl-3 flex flex-col gap-2">
        <span class=" text-blue-500 font-bold text-2xl">${data.name}</span><div class="bg-blue-100 p-1 rounded-md ">
        <span id="description" class="text-blue-800 font-bold">${data.weather[0].description} </span></div>
        <div class="bg-blue-100 p-1 rounded-md text-sm">
        <span class="text-blue-800 ">max temp : </span><span id="maxTemp" class="text-blue-800 ">${data.main.temp_max} F</span></div>
        <div class="bg-blue-100 p-1 rounded-md text-sm"><span class="text-blue-800 ">min temp : </span>
        <span id="minTemp" class="text-blue-800 ">${data.main.temp_min} F</span></div><div class="bg-blue-100 p-1 rounded-md text-sm">
        <span class="text-blue-800 ">wind speed : </span>
        <span id="windSpeed" class="text-blue-800 ">${data.wind.speed}</span></div><div class="bg-blue-100 p-1 rounded-md text-sm">
        <span class="text-blue-800 ">humidity : </span><span id="humidity" class="text-blue-800 ">${data.main.humidity} </span></div></div></div>`
    }
   
return search
}
