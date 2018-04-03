let button = document.querySelector("#button")

const getWeather = () => {

  let result = document.querySelector("#displayTemperature")
  let input = document.querySelector("#City").value
  const init = { method: 'GET',
                 cache: 'default' };

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=99323a8e238383c59cbac609599629dd`, init)
  .then(function(response) {

    if(response.ok) {
      response.json().then(function(data) {
        result.innerHTML = `${data.main.temp}°C`
      })
    }
      else {
      console.log(response.status)
    }

  })
}

button.addEventListener('click', getWeather)