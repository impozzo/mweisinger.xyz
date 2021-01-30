
// Weather stuff
window.addEventListener('DOMContentLoaded', (event) => {

    const access_key = '027d547424709c1c7ea8ed0aa7ae961a';
    const query = 'New York';
    const weatherApiUrl = `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}&units=f`;

    axios.get(weatherApiUrl).then(function (response) {
        //Hide spinner
        // $('#spin').toggleClass('d-none');
        const { request, location, current } = response.data;
        const { type, query, language, unit } = request;
        const { observation_time, temperature, weather_code, weather_icons, weather_descriptions, wind_speed,
            wind_degree,
            wind_dir,
            pressure,
            precip,
            humidity,
            cloudcover,
            feelslike,
            uv_index,
            visibility,
            is_day } = current;

            for( let i = 0; i < 1000000000; i++)
{} // This synchronous script is going to delay parsing of the DOM,
   // so the DOMContentLoaded event is going to launch later.

            document.querySelector('.spinner-grow').classList.add('d-none'); 

            const weatherHtml =
            `
            <div class="container d-inline-flex flex-column flex-sm-row justify-content-between flex-fill">
            <div class="m-1">Location: ${query}</div>
            <div class="m-1">Current Temp: ${temperature}&#8457;</div>
            <div class="m-1">${observation_time}</div>
            <div id="more-weather" class="m-1  text-right">
                <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" id="more-weather-btn">                    
                    <i id="fas-btn" class="fas fa-angle-double-down text-white "></i>
                </a>
            </div>
        </div>
        <div class="collapse" id="collapseExample">
            <div class="d-inline-flex flex-column flex-sm-row justify-content-end">
                <div class="m-1"><img src="${weather_icons[0]}" alt="Weather View"></div>
                
                <div class="m-1">${weather_descriptions[0]}</div>
            </div>
        </div>
        `; 

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = weatherHtml;

        //const weatherInfo = document.querySelector('#weather-info')
//console.log(weatherInfo);
const moreWeatherBtn = document.getElementById('more-weather-btn');
moreWeatherBtn.addEventListener('click', event => flipWeatherBtn());

    }).catch(function (error) {
        // Something better should happen here
        //console.log(error);
        document.querySelector('.spinner-grow').innerHTML = "";
    });
});

function flipWeatherBtn()
{
    const moreWeather = document.getElementById('fas-btn');
    const weatherBtnUp = 'fa-angle-double-up';
    const weatherBtnDown = 'fa-angle-double-down';
    

    if (moreWeather.classList.contains(weatherBtnUp))
    {
        moreWeather.classList.remove(weatherBtnUp);
        moreWeather.classList.add(weatherBtnDown);

    }
    else{
        moreWeather.classList.remove(weatherBtnDown);
        moreWeather.classList.add(weatherBtnUp);
    }

}

// End weather stuff