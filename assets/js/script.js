var currentDayEl = document.querySelector("#currentDay");
var scheduleContainerEl = document.querySelector(".container");

var descriptionEl = document.querySelectorAll(".description");

var saveBtnEl = document.querySelectorAll(".saveBtn");

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

//local storage

var saveDescription = function (event) {
  var time = event.target.parentNode.children[0].textContent;
  var description = event.target.parentNode.children[1].value;

  localStorage.setItem(time, description);
};

var getSchedule = function () {
  for (var i = 0; i < descriptionEl.length; i++) {
    var time = descriptionEl[i].parentNode.children[0].textContent;

    var saveValue = localStorage.getItem(time);
    descriptionEl[i].textContent = saveValue;
  }
};
getSchedule();

//event
var addEvents = function () {
  for (var i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", saveDescription);
  }
};
addEvents();
