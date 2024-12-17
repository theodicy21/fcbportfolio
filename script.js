// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let iconImg = document.getElementById('weather-icon');
let imgURL = document.querySelector(".imgURL");
const kelvin = 273;
  
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      // API ID
      const api = "d97f3d06769dba8db3393f080c5c3858";
  
      // API URL
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=${api}&units=metric`;
  
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let icon = data.weather[0].icon;
          const iconUrl = 'https://openweathermap.org/img/wn/'+ icon+'@2x.png';
          temperature.textContent = 
              Math.floor(data.main.temp) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          // imgURL.textContent = iconUrl;
          iconImg.src = iconUrl;
          // icon.src = iconImg;
          // let icon1 = data.weather[0].icon;
          // icon.innerHTML = 
              // <img src="icons/${icon1}.svg" style= 'height:10rem'/>;
        });
    });
  }
});


function option(evt, choice) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("modal");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(choice).style.display = "block";
  evt.currentTarget.className += " active";
}

function DBLog_In(evt) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb+srv://21theodicy:042124@cluster0.khtnn.mongodb.net/";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      var dbo = db.db("portfoliodb_users");
      var UserName = document.getelementbyId("u_name");
      var Pass = document.getelementbyId("psw");

      dbo.collection("PortfolioDB").find(UserName).toArray(function(err, result) {
          if (err) throw err;
            document.getElementById("result").innerHTML = "OK!";
            db.close();
      });
  });
}
