const workouts = [
  "Easy run 6 km",
  "Intervals: 5×400 m",
  "Upper body strength",
  "Lower body strength",
  "Mobility & stretching",
  "Rest day"
];

function generateWorkout() {
  const i = Math.floor(Math.random() * workouts.length);
  document.getElementById("result").textContent = workouts[i];
}
``