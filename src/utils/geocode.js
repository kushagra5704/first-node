const request = require('request')
const geocode = (address , callback) =>
{
const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoia3VzaGFncmE1NzA0IiwiYSI6ImNrOTMzamxsYTAxOTUzZm83MXBlMG1wem4ifQ.YM8g7-moPJ98FxKVMLfzxQ"
request({url: url1 , json:true},(error,response = {}) =>
{
    if(error)
    {
        //console.log("unable to connect")
        callback("unable to connect" , undefined )
    }
    if(response.body.features.length === 0)
    {
        //console.log()
        callback("wrong credentials" , undefined )
    }
    else{
        const data = 
        {
            latitude: response.body.features[0].center[0], 
            longitude: response.body.features[0].center[1]
        }
        callback(undefined , data)
       // const latitude = response.body.features[0].center[0] 
       // const longitude = response.body.features[0].center[1]
       // const url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02"

    }

})
}

module.exports = geocode

