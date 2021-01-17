jQuery(document).ready(function($){


    //const zipcode = $("input#zipcode").val();
        const access_key = '027d547424709c1c7ea8ed0aa7ae961a';
        const query = 'New York';
        const weatherApiUrl = `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`;

        axios.get(weatherApiUrl).then(function (response) {
            //Hide spinner
           // $('#spin').toggleClass('d-none');
            const {request, location, current} = response.data;
            const {type, query, language, unit} = request;
            const {observation_time, temperature, weather_code, weather_icons,weather_descriptions,wind_speed,
            wind_degree,
            wind_dir,
            pressure,
            precip,
            humidity,
            cloudcover,
            feelslike,
            uv_index,
            visibility,
            is_day} = current;
            //weather_icons & weather_descriptions are arrays
            
$( '#weather-info').empty();
            const weatherHtml = `
            <div class="col">
        <div class="row">${type}</div>
        <div class="row">${query}</div>
        <div class="row">3</div>
    </div>

        `;
        $('#weather-info').html(weatherHtml);
        
        }).catch(function (error) {
            // Something better should happen here
        });

});