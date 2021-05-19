// # Date exercises

// We have covered all the information you need for this task in our examples :)
// Of course, if you want to research more - you can do that too!

// Questions based on https://gist.github.com/nkabrown/44d45ceee28a2e29d3cb51ba2efaaa12

// 1. create a date object with today's date
const currentDate = Date();
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

// 5. randomly set either a true or a false a boolean property called `workout` on each date object in the array

// 6. is the workout for the first day of the year true?

// 7. is the workout for seven days ago true?

// 🌻
