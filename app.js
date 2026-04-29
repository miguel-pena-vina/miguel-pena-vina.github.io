const percentages = [0.95, 0.9, 0.8, 0.7]
const sets = [3, 5]
const elementId = ["verPush", "horPush","verPull","horPull","kneeExt","hipHinge"]


function writeToElement(elementId , exerciseData){

  const selected = exerciseData[Math.floor(Math.random() * exerciseData.length)];
  const RM = selected[1];
  var load;
  if (RM ==0){

    load = ``
  } else{
    load = Math.floor(RM * percentages[Math.floor(Math.random() * percentages.length)]);
    load =`${load}kg`
  }
   
  const selectedSets = sets[Math.floor(Math.random() * sets.length)];
  var text = `${selected[0]} ${load}`;

  for (var i = 0; i < selectedSets; i++){
    text += `  __  `;
  }


  document.getElementById(elementId).textContent = text;


}

async function generateWorkout() {
  const response = await fetch("exercises.json");
  const data = await response.json();
  const keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++){
    
    writeToElement(elementId[i], Object.entries(data[keys[i]]));
  }

}
``
//Store calculated 1RM and from there obtain different rep ranges
//From the calculated values, increase the weight by 5%
//Store new RM