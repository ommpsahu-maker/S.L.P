let workoutData = JSON.parse(localStorage.getItem("workoutData")) || [];

let container = document.getElementById("exerciseSummary");

let totalVolume = 0;
let totalSets = 0;

/* show exercises */

workoutData.forEach(ex => {

let div = document.createElement("div");

div.className = "exercise-card";

div.innerHTML = `
<b>${ex.exercise}</b><br>
Sets: ${ex.sets} | Reps: ${ex.reps} | Weight: ${ex.weight}kg<br>
Volume: ${ex.volume} kg
`;

container.appendChild(div);

totalVolume += Number(ex.volume);
totalSets += Number(ex.sets);

});


/* show totals */

document.getElementById("totalVolume").innerText =
"Total Volume: " + totalVolume + " kg";

document.getElementById("totalSets").innerText =
"Total Sets: " + totalSets;


/* duration */

let duration = localStorage.getItem("workoutDuration") || 0;

document.getElementById("duration").innerText =
"Workout Duration: " + duration + " minutes";



/* SAVE HISTORY */

let history = JSON.parse(localStorage.getItem("workoutHistory")) || [];

let entry = {
date: new Date().toLocaleDateString(),
duration: duration,
volume: totalVolume,
exercises: workoutData
};

history.push(entry);

localStorage.setItem("workoutHistory", JSON.stringify(history));