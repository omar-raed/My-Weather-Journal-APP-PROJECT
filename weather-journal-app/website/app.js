

/* Global Variables */
const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const apiKey = `&appid=b8b07c594191d5556ecedbe1100e15b9&units=imperial`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();



// Event listener to add function to existing HTML DOM element

document.getElementById("generate").addEventListener("click", implement);

/* Function called by event listener */

function implement(event) {
  const userZip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  getWeatherData(baseURL, userZip, apiKey)

  .then ( function(data){
    console.log(data);

    postData("/addData",{date:newDate, temperature: data.main.temp , userResponse: feelings})
    
  

  })
  .then( updateUI() )

}

/* Function to GET Web API Data*/

const getWeatherData = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key )

  try {
    const data = await res.json();
    return data ;
  }catch(error) {
    console.log("error", error);

  }
}

/* Function to POST data */

const postData = async ( url = "", data = {}) => {
  console.log(data); 
  const response = await fetch(url, {
    method: "post",
    Credentials: "same-origin",
    headers: {
      "content-type":"application/json",
    },

    body: JSON.stringify(data)
  })

  try {
  const newData = await response.json();
    console.log(newData);
    return newData ;
  } catch(error){
    console.log("error", error);
    }
}

/* Function to GET Project Data */

const updateUI = async () => {
  const request = await fetch ("/all");
  try {
    const allData = await request.json();
    //console.log(allData)
    document.getElementById("date").innerHTML = `date: ${allData.date}`;
    document.getElementById("temp").innerHTML = `temperture: ${allData.temperature} F`;
    document.getElementById("content").innerHTML = allData.userResponse;

  } catch (error) {
    console.log("error", error);
  }
}
