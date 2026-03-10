/* get workout type */

let workout = localStorage.getItem("currentWorkout");

document.getElementById("workoutTitle").innerText = workout + " Workout";


/* exercise database */

const exercises = {

Chest:[
"Barbell Bench Press","Incline Bench Press","Decline Bench Press",
"Dumbbell Bench Press","Incline Dumbbell Press","Machine Chest Press",
"Cable Fly","Pec Deck Fly","Pushups","Weighted Pushups","Chest Dips"
],

Back:[
"Deadlift","Pull Ups","Lat Pulldown","Barbell Row","Dumbbell Row",
"T Bar Row","Seated Cable Row","Machine Row","Face Pull"
],

Shoulders:[
"Barbell Overhead Press","Dumbbell Shoulder Press","Arnold Press",
"Lateral Raise","Cable Lateral Raise","Front Raise","Rear Delt Fly"
],

Biceps:[
"Barbell Curl","EZ Bar Curl","Dumbbell Curl","Hammer Curl",
"Incline Dumbbell Curl","Preacher Curl","Cable Curl"
],

Triceps:[
"Close Grip Bench Press","Tricep Dips","Cable Pushdown",
"Rope Pushdown","Overhead Tricep Extension","Skull Crushers"
],

Legs:[
"Back Squat","Front Squat","Goblet Squat","Leg Press",
"Lunges","Romanian Deadlift","Leg Curl","Leg Extension","Calf Raises"
]

};


/* decide workout exercises */

let workoutExercises = [];

if(workout === "Push"){
workoutExercises = [
...exercises.Chest,
...exercises.Shoulders,
...exercises.Triceps
];
}

else if(workout === "Pull"){
workoutExercises = [
...exercises.Back,
...exercises.Biceps
];
}

else if(workout === "Legs"){
workoutExercises = exercises.Legs;
}

else if(workout === "Upper"){
workoutExercises = [
...exercises.Chest,
...exercises.Back,
...exercises.Shoulders,
...exercises.Biceps,
...exercises.Triceps
];
}

else if(workout === "Lower"){
workoutExercises = exercises.Legs;
}

else if(workout === "Chest"){
workoutExercises = exercises.Chest;
}

else if(workout === "Back"){
workoutExercises = exercises.Back;
}

else if(workout === "Shoulders"){
workoutExercises = exercises.Shoulders;
}


/* display exercises */

let list = document.getElementById("exerciseList");

workoutExercises.forEach(exercise => {

let card = document.createElement("div");

card.className = "exercise-card";

card.innerHTML = `

<label>
<input type="checkbox" class="selectExercise" value="${exercise}">
<b>${exercise}</b>
</label>

<br>

Sets:
<input type="number" class="sets" value="3" min="1">

Reps:
<input type="number" class="reps" value="10" min="1">

Weight (kg):
<input type="number" class="weight" value="0" min="0">

<p class="volume">Volume: 0</p>

`;

list.appendChild(card);

});


/* calculate volume */

function calculateVolume(){

let cards = document.querySelectorAll(".exercise-card");

cards.forEach(card => {

let sets = card.querySelector(".sets").value;
let reps = card.querySelector(".reps").value;
let weight = card.querySelector(".weight").value;

let volume = sets * reps * weight;

card.querySelector(".volume").innerText = "Volume: " + volume;

});

}

document.addEventListener("input", calculateVolume);


/* save workout */

function saveWorkout(){

let workoutData = [];

let cards = document.querySelectorAll(".exercise-card");

cards.forEach(card => {

let checkbox = card.querySelector(".selectExercise");

if(checkbox.checked){

let exercise = checkbox.value;
let sets = card.querySelector(".sets").value;
let reps = card.querySelector(".reps").value;
let weight = card.querySelector(".weight").value;

let volume = sets * reps * weight;

workoutData.push({
exercise,
sets,
reps,
weight,
volume
});

}

});

/* save to storage */

localStorage.setItem("workoutData", JSON.stringify(workoutData));

/* go to summary page */

window.location.href = "summary.html";

}