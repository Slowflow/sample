$(function() {

   $('#btnWeather').click(function () {
        getWeatherByCity('en', showDate, showErr, $('#inputCityName').val());
    });
    $('#inputCityName').keypress(function(e) {
        var ENTER_KEY_CODE = 13;
        if ( e.which === ENTER_KEY_CODE ) 
        {
            $('#btnWeather').trigger('click');
            return false;
        }
    });    
  
    getWeatherData('en', showDate, showErr);
  

    function showDate (data) {
        var city = data.city.name;
        var country = data.city.country;
        var tempDay = data.list[0].temp.day;
        var tempNight = data.list[0].temp.night;
        var description = data.list[0].weather[0].description;
        var windSpeed = data.list[0].speed;
        var humidity = data.list[0].humidity;
        var pressure = data.list[0].pressure;
        var HECTOPASCAL = 0.75006375541921;
        var weathericon = data.list[0].weather[0].icon; 
        var pressureMMHG = pressure * HECTOPASCAL;
        var bits = (pressureMMHG).toFixed(3);
           
        
        $("#table tr:not(:first)").remove();
        $('#location').html(city + ', <strong>' + country + '</strong>');
        $('#tempDay').html(tempDay);
        $('#tempNight').html(tempNight);
        $('#description').html(description);
        $('#weathericon').html('<p>'+'<img src="images/sighs/' + weathericon + '.png" />' + '</p>');
        $('#table tr:last').after('<tr>' + '<td>' + 'Wind  ' + windSpeed + 'm/c' + '</td>' + '<td>' + bits + 'mmhg' + '</td>' +'<td>' + humidity + '%' + '</td>' + '</tr>');
        
    
    }
        
    function showErr(message) {
        
    }
    
    
});