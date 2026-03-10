let history = JSON.parse(localStorage.getItem("workoutHistory")) || [];

let container = document.getElementById("historyList");

if(history.length === 0){

container.innerHTML = "<p>No workouts yet</p>";

}

history.reverse().forEach(workout => {

let card = document.createElement("div");

card.className = "exercise-card";

card.innerHTML = `
<h3>${workout.date}</h3>
<p>Duration: ${workout.duration} minutes</p>
<p>Total Volume: ${workout.volume} kg</p>
`;

container.appendChild(card);

});