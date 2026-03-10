/* SHOW USER DATA */

let goal = localStorage.getItem("slpGoal");
let level = localStorage.getItem("slpLevel");
let split = localStorage.getItem("slpSplit");

document.getElementById("goalDisplay").innerText = "Goal: " + goal;
document.getElementById("levelDisplay").innerText = "Level: " + level;
document.getElementById("splitDisplay").innerText = "Split: " + split;

let plan = document.getElementById("plan");


/* WEEKLY PLAN DISPLAY */

if(split === "BroSplit"){

plan.innerHTML = `
<p>Monday → Chest</p>
<p>Tuesday → Back</p>
<p>Wednesday → Shoulders</p>
<p>Thursday → Rest</p>
<p>Friday → Legs</p>
<p>Saturday → Rest</p>
<p>Sunday → Rest</p>
`;

}

else if(split === "PPL"){

plan.innerHTML = `
<p>Monday → Push</p>
<p>Tuesday → Pull</p>
<p>Wednesday → Legs</p>
<p>Thursday → Rest</p>
<p>Friday → Push</p>
<p>Saturday → Pull</p>
<p>Sunday → Rest</p>
`;

}

else if(split === "UpperLower"){

plan.innerHTML = `
<p>Monday → Upper</p>
<p>Tuesday → Lower</p>
<p>Wednesday → Rest</p>
<p>Thursday → Upper</p>
<p>Friday → Lower</p>
<p>Saturday → Rest</p>
<p>Sunday → Rest</p>
`;

}

else if(split === "Hybrid"){

plan.innerHTML = `
<p>Monday → Push</p>
<p>Tuesday → Pull</p>
<p>Wednesday → Legs</p>
<p>Thursday → Rest</p>
<p>Friday → Upper</p>
<p>Saturday → Lower</p>
<p>Sunday → Rest</p>
`;

}



/* GET TODAY'S WORKOUT */

function getTodayWorkout(){

let today = new Date().getDay();

let workout = "Rest";

if(split === "BroSplit"){

if(today === 1) workout = "Chest";
if(today === 2) workout = "Back";
if(today === 3) workout = "Shoulders";
if(today === 5) workout = "Legs";

}

else if(split === "PPL"){

if(today === 1) workout = "Push";
if(today === 2) workout = "Pull";
if(today === 3) workout = "Legs";
if(today === 5) workout = "Push";
if(today === 6) workout = "Pull";

}

else if(split === "UpperLower"){

if(today === 1) workout = "Upper";
if(today === 2) workout = "Lower";
if(today === 4) workout = "Upper";
if(today === 5) workout = "Lower";

}

else if(split === "Hybrid"){

if(today === 1) workout = "Push";
if(today === 2) workout = "Pull";
if(today === 3) workout = "Legs";
if(today === 5) workout = "Upper";
if(today === 6) workout = "Lower";

}

localStorage.setItem("currentWorkout", workout);

}



/* START WORKOUT */

function startWorkout(){

let startTime = Date.now();

localStorage.setItem("startTime", startTime);

window.location.href = "exercise.html";

}



/* STOP WORKOUT */

function stopWorkout(){

let start = Number(localStorage.getItem("startTime"));

let end = Date.now();

let duration = Math.floor((end - start) / 1000 / 60);

localStorage.setItem("workoutDuration", duration);

window.location.href = "summary.html";

}



/* CHANGE SPLIT */

function changeSplit(){

localStorage.removeItem("slpSplit");

window.location.href = "split.html";

}