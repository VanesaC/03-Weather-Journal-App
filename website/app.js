/* Global Variables */
const apiKey = '6aef3d0d11e8d108025075caab69e33f&units=metric';
// Create a new date instance dynamically with JS
let d = new Date();
let realMonth = parseInt(d.getMonth(), 10) + 1;
let newDate = d.getDate() + '.' + realMonth + '.' + d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener    85730 */
function performAction(e) {
  // creating the base URL

  let zipCode = document.getElementById('zip').value;
  // console.log(zipCode);
  let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=`;
  let feeling = document.getElementById('feelings').value;
  // console.log(baseURL);
  getWeatherData(baseURL, apiKey).then(function (data) {
    postData('/add', {
      date: newDate,
      temp: data.main.temp,
      content: feeling,
    });
    updateUI();
  });
}

/* Function to GET Web API Data*/
const getWeatherData = async (baseURL, apiKey) => {
  const res = await fetch(baseURL + apiKey);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', error);
    // appropriately handle the error
  }
};

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};
/* Function to update UI */
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    console.log(allData);

    document.getElementById('temp').innerHTML =
      'The temperature today is ' + allData.temp + ' degrees';
    //getting the info from the feeling tab
    // let feeling = document.getElementById('feelings').value;
    document.getElementById('content').innerHTML =
      'Today I am feeling ' + allData.content;
    document.getElementById('date').innerHTML =
      'The date today is ' + allData.date;
  } catch (erorr) {
    console.log('error ui function');
  }
};
