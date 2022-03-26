var currentDayEl = document.querySelector("#currentDay");
var scheduleContainerEl = document.querySelector(".container");

var descriptionEl = document.querySelectorAll(".description");

var currentTime = Number(moment().format("H"));

var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// displaying the day on top of the calender

var displayDay = function () {
  var currentDay = moment().format("dddd MMMM Do  YYYY, h a");
  currentDayEl.innerHTML = currentDay;
};
displayDay();

var checkTime = function () {
  for (var i = 0; i < workHours.length; i++) {
    if (currentTime > workHours[i]) {
      descriptionEl[i].classList.add("past");
    } else if (currentTime < workHours[i]) {
      descriptionEl[i].classList.add("future");
    } else {
      descriptionEl[i].classList.add("present");
    }
  }
};
checkTime();

//
/*
if(time === past){
descriptionEl.style.background.color = "grey"
#option2
descriptionEl.addClass("past")
}
if(time === current){
  descriptionEl.style.background.color = "red"
  #option2
descriptionEl.addClass("present")
}
if(time === future)
descriptionEl.style.background.color = "green"
#option2
descriptionEl.addClass("future")
*/
