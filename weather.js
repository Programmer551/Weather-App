const input = document.getElementById("input");
const button = document.getElementById("button");
const city = document.getElementById("city");
const max = document.getElementById("max_temp");
const min = document.getElementById("min_temp");
const avg = document.getElementById("avg_temp");
const fire = (e) => {
  e.preventDefault();
  let value = input.value;
  city.innerHTML = `${value}'s Temperature:`;
  let a = async () => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${value}&days=3`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b622ff5086msh6b4f8c0757192c0p11800bjsn30e8ed1641df",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };HTMLTemplateElement

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      let temp1 = result.forecast.forecastday[0].day.maxtemp_c;
      let temp2 = result.forecast.forecastday[0].day.mintemp_c;
      let temp3 = result.forecast.forecastday[0].day.avgtemp_c;
      max.innerHTML = `Maximum Temperature: ${temp1}`;
      min.innerHTML = `Minimum Temperature: ${temp2}`;
      avg.innerHTML = `Avarage Temperature: ${temp3}`;
    } catch (error) {
      city.innerHTML = "Not Found";
      max.innerHTML = "Not Found";
      min.innerHTML = "Not Found";
      avg.innerHTML = "Not Found";
      console.error(error);
    }
  };
  a();
};
button.addEventListener("click", fire);
