$('#countryInfo').click(function() {

    $.ajax({
        url: 'libs/php/getCountryInfo.php',
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#countryInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == 'ok') {


                $('#txtCapital').html(result['data'][0]['capital']);




            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 
});

$('#countrySub').click(function() {

    $.ajax({
        url: 'libs/php/countrySub.php',
        type: 'POST',
        dataType: 'json',
        data: {
            latitude: 35.4041,
            longitude: 136.6498
        },
        success:function(result) {
            console.log(result);

            if (result.status.name == 'ok') {

                $('#prefecture').html(result['data']['adminName1']);

             }
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    });
});

$('#icao').click(function() {

    $.ajax({
        url: 'libs/php/weather.php',
        type: 'POST',
        dataType: 'json',
        data: {
            icao: 'RJNG'
        },
        success:function(result) {
            console.log(result);

            if (result.status.name == 'ok') {

                $('#temperature').html(result['data']['weatherObservation']['temperature']);

             }
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    });
});