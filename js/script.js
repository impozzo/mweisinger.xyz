

jQuery(document).ready(function ($) {

    console.log('Inside .ready');
    //const zipcode = $("input#zipcode").val();
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
        //weather_icons & weather_descriptions are arrays


        $('.spinner-grow').addClass('d-none');
        const weatherHtml =
            `
            <div class="container d-flex flex-column flex-sm-row justify-content-between flex-fill">
            <div class="bg-danger m-1">Location: ${query}</div>
            <div class="m-1">Current Temp: ${temperature}&#8457;</div>
            <div class="bg-secondary m-1">${observation_time}</div>
            <div id="more-weather" class="m-1  text-right"><a data-bs-toggle="collapse" href="#collapseExample"
                    role="button" aria-expanded="false" aria-controls="collapseExample">                    
                    <i id="more-weather-btn" class="fas fa-angle-double-down"></i>
                </a>
            </div>
        </div>
        <div class="collapse bg-secondary" id="collapseExample">
            <div class="d-flex flex-column flex-sm-row justify-content-end">
                <div class="m-1"><img src="${weather_icons[0]}" alt="Weather View"></div>
                
                <div class="bg-warning m-1">${weather_descriptions[0]}</div>
            </div>
        </div>
        `;
        $('#weather-info').html(weatherHtml);

    }).catch(function (error) {
        // Something better should happen here
        console.log(error);
    });



    $('#weather-info').click(function () {

        const weatherBtnUp = 'fa-angle-double-up';
        const weatherBtnDown = 'fa-angle-double-down';

        // Button is pointing up
        if ($('#more-weather-btn').hasClass(weatherBtnUp)) {
            $('#more-weather-btn').removeClass(weatherBtnUp).addClass(weatherBtnDown);
        }
        else {
            $('#more-weather-btn').removeClass(weatherBtnDown).addClass(weatherBtnUp);
        }
    });


});

