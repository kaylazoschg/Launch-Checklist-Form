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
      let launchStatus = document.querySelector('h2');
      let cargoStatus = document.getElementById('cargoStatus');

      //validation alerts
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         window.alert("All fields required, dumbass");
         event.preventDefault();
      } else if (isNaN(Number(pilotInput.value)) === false) {
         window.alert('Pilot name may not be a number');
         event.preventDefault();
      } else if (isNaN(Number(copilotInput.value)) === false) {
         window.alert('Co-pilot name may not be a number');
         event.preventDefault();
      } else if (isNaN(fuelInput.value)) {
         window.alert('Fuel level must be a number');
         event.preventDefault();
      } else if (isNaN(cargoInput.value)) {
         window.alert('Cargo mass must be a number');
         event.preventDefault();
      }

      //updating shuttle requirements
      pilotStatus.innerHTML(`${pilotInput.value}`);
      copilotStatus.innerHTML(`${copilotInput.value}`);
      if (fuelInput.value<10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML("There is not enough fuel for the journey.");
         launchStatus.innerHTML('Shuttle not ready for launch').style.color = 'red';
      } else if (cargoInput.value>10000) {
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML('There is too much mass for the shuttle to take off.');
         launchStatus.innerHTML('Shuttle not ready for launch').style.color = 'red';
      } else {
         launchStatus.innerHTML('Shuttle is ready for launch').style.color = 'green';
      }

      //fetching planetary data
   });
   event.preventDefault();
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
