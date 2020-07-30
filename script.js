// Write your JavaScript code here!
window.addEventListener('load', function(){
   let form = document.querySelector('form');
   form.addEventListener('submit', function(event){
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let faultyItems = document.getElementById('faultyItems');
      let fuelStatus = document.getElementById('fuelStatus');
      let launchStatus = document.getElementById('launchStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      const missionTarget = document.getElementById('missionTarget');

      //validation alerts
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         window.alert("All fields required, dumbass.");
         event.preventDefault();
      } else if (isNaN(Number(pilotInput.value)) === false) {
         window.alert('Pilot name may not be a number.');
         event.preventDefault();
      } else if (isNaN(Number(copilotInput.value)) === false) {
         window.alert('Co-pilot name may not be a number.');
         event.preventDefault();
      } else if (isNaN(fuelInput.value)) {
         window.alert('Fuel level must be a number.');
         event.preventDefault();
      } else if (isNaN(cargoInput.value)) {
         window.alert('Cargo mass must be a number.');
         event.preventDefault();
      }

      //updating shuttle requirements
      pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
      if (fuelInput.value<10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = "There is not enough fuel for the journey";
         launchStatus.innerHTML = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      } 
      if (cargoInput.value>10000) {
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = 'There is too much mass for the shuttle to take off';
         launchStatus.innerHTML = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      } else {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = 'Shuttle is ready for launch';
         launchStatus.style.color = 'green';
      }
   });

   //fetching planetary data
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
      response.json().then(function(json){
         let randomPlanet = Math.floor(Math.random()*json.length);
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomPlanet].name}</li>
            <li>Diameter: ${json[randomPlanet].diameter}</li>
            <li>Star: ${json[randomPlanet].star}</li>
            <li>Distance from Earth: ${json[randomPlanet].distance}</li>
            <li>Number of Moons: ${json[randomPlanet].moons}</li>
         </ol>
         <img src="${json[randomPlanet].image}">
         `;
      });
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}">
*/
