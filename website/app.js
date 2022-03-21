/* Global Variables */
const apiKey = '6aef3d0d11e8d108025075caab69e33f&units=metric';
// Create a new date instance dynamically with JS
let d = new Date();
let realMonth = parseInt(d.getMonth(), 10) + 1;
let newDate = d.getDate() + '.' + realMonth + '.' + d.getFullYear();
//Generate button
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  // creating the base URL

  let zipCode = document.getElementById('zip').value;
  console.log(zipCode);
  let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=`;
  console.log(baseURL);
  // getWeather(baseURL, apiKey);
}
//85730

// Async POST
const postData = async (url, data) => {
  //console.log(data);
  console.log(JSON.stringify(data));
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log(error);
  }
};
postData('/add', {
  city: 'Bucharest',
  date: '03.03.2022',
  temp: '20degrees Celsius',
  content: 'feeling happy',
});
