// # Date exercises

// We have covered all the information you need for this task in our examples :)
// Of course, if you want to research more - you can do that too!

// Questions based on https://gist.github.com/nkabrown/44d45ceee28a2e29d3cb51ba2efaaa12

// 1. create a date object with today's date
const currentDate = new Date();
console.log(currentDate);

// 2. create a date object with the date of 1 January 2017
const specificDate1 = new Date("January 1, 2017, 01:00:00");
console.log(specificDate1);

// 3. find the number of days between today and 1 Jan 2017
let todayDate = new Date("May 19, 2021, 01:00:00");
let lastDate = new Date("January 1, 2017, 01:00:00");
let differenceInTime = todayDate.getTime() - lastDate.getTime();
console.log(differenceInTime);
let differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24) + 1);
console.log(
  `Total number of days between ${lastDate} and ${todayDate} is ${differenceInDays}`
);

// 4. create an array of objects for each day between today and 1 Jan 2017
//     Something like this: [ { date: "01.01.2017" }, { date: "02.01.2017" }, ..... ];

// let dayArray = [];
// for (i = 0; i < 1600; i++) {
//   let dateOfTheDay = new Date(2017, 1, -29);
//   //  console.log(dateOfTheDay);
//   dateOfTheDay = dateOfTheDay.getMilliseconds() + 86400 * 1000 * i;
//   let dateOfTheDayMin = new Date(dateOfTheDay).toString();
//   // console.log(dateOfTheDay);
//   //  dateOfTheDay = dateOfTheDay.getDate();
//   //  dayArray.push(dateOfTheDayMin);
// }
// console.log(dayArray[dayArray.length - 1]);

// let timeStamp = new Date("January 1, 2017, 01:00:00");
// console.log(timeStamp);

// var date = new Date(milliseconds);
// down.innerHTML = date.toString();

const dayArray = [];
const toDay = new Date();
const jan2017 = new Date(2017, 0, 1, 1);
const secDiff = (toDay - jan2017) / 1000;
const daysDiff = secDiff / (24 * 60 * 60);
const daysDiffFixed = daysDiff.toFixed();
console.log(`From Jan 1, 2017 until today we have ${daysDiffFixed} days`);

for (let i = 0; i < daysDiff; i++) {
  const milliseconds = jan2017.getTime() + i * (1000 * 60 * 60 * 24);
  const stringDate = new Date(milliseconds).toString().slice(4, 15);

  let randomWorkout = Math.round(Math.random());
  let workout = true;
  //  console.log(randomWorkout);
  if (randomWorkout > 0) {
    workout = true;
  } else {
    workout = false;
  }
  const workoutBoolean = `Workout: ${workout}`;

  const objectDate = { date: stringDate, boo: workoutBoolean };

  dayArray.push(objectDate, workoutBoolean);
}
console.log(dayArray);

// 5. randomly set either a true or a false a boolean property called `workout` on each date object in the array
// let randomWorkout = Math.round(Math.random());
// let workout = true;
// console.log(randomWorkout);
// if (randomWorkout > 0) {
//   workout = true;
// } else {
//   workout = false;
// }

// 6. is the workout for the first day of the year true?
console.log(dayArray[0]);
if (dayArray[0].boo == "Workout: true") {
  console.log("Yes, it's true!");
} else {
  console.log("No");
}

// 7. is the workout for seven days ago true?
console.log(dayArray[dayArray.length - 2]);
if (dayArray[dayArray.length - 2].boo == "Workout: true") {
  console.log("That's true!");
} else {
  console.log("Nada niente");
}

// 🌻
