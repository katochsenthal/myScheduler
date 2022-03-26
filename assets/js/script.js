var currentDayEl = document.querySelector("#currentDay");
var scheduleContainerEl = document.querySelector(".container");

// displaying the day on top of the calender

var displayDay = function () {
  var currentDay = moment().format("MMMM Do  YYYY, h:mm:ss a");
  currentDayEl.innerHTML = currentDay;
};
displayDay();
