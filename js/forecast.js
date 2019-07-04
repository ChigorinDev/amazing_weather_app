const key = 'ZsOUoJEIt13BaUpuGdUDRV8FANwLAX8a';


//get weather information
const getWeather = async(id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log(data[0].Temperature.Metric);
  return data;
};


//get City information
const getCity = async(city) => { 

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  //query parametre we add to the end of url
  const query = `?apikey=${key}&q=${city}`;


  //fetch the data 
  const response = await fetch(base + query);
  //convert fetched data into json
  const data = await response.json();

  
  //return promise with data
  return data[0];
}

//after I get promise then get the data and do somthing to it
getCity('Taganrog')
  .then(data => getWeather(data.Key))
  .catch(err => console.log(err));
