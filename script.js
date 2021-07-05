"use strict";

let btnStart = document.querySelector(".btn-start");
let btnSubmit = document.querySelector(".btn-submit");
let btnClose = document.querySelector(".close");

let yearContainer = document.querySelector(".year-box");
let yearBox = document.querySelector(".calc-year");
let resultBox = document.querySelector(".result-year");
let errorBox = document.querySelector(".error");

let result = document.querySelector(".result");

let inputYear = document.querySelector("#year");
let inputMonth = document.querySelector("#month");
let inputDay = document.querySelector("#day");

let year, month, day;
let curYear = new Date().getFullYear();
let curMonth = new Date().getMonth();
let curDay = new Date().getDate();

// let ;

btnStart.addEventListener("click", function (e) {
    e.preventDefault();
    btnStart.classList.add("hide");
    yearContainer.classList.remove("hide");
    yearBox.classList.remove("hide");
});

btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    year = Number(inputYear.value);
    month = Number(inputMonth.value);
    day = Number(inputDay.value);
    if (year > curYear || year == 0) {
        errorBox.classList.remove("hide");
        errorBox.textContent = `Your birth year '${year}' cann't be grater than ${curYear} or empty`;
    } else if (month > 12 || month < 1) {
        errorBox.classList.remove("hide");
        errorBox.textContent = `Your birth Month '${month}' cann't be grater than 12 or less than 1`;
    } else if (day > 31 || day < 1) {
        errorBox.classList.remove("hide");
        errorBox.textContent = `Your birth Day '${day}' cann't be grater than 31 or less than 1`;
    } else {
        yearBox.classList.add("hide");
        resultBox.classList.remove("hide");
        year = curYear - year + (curMonth >= month - 1 ? 0 : -1);
        month = curMonth >= month ? curMonth - (month - 1) : 12 - (month - curMonth);
        day = curDay >= day ? curDay - day : 30 - (day - curDay);
        console.log(curMonth);
        console.log(curMonth >= month - 1 ? 1 : 0);
        result.textContent = year + "y " + month + "m " + day + "d";
        updateUI();
    }
    setTimeout(function () {
        errorBox.classList.add("hide");
        errorBox.textContent = "";
    }, 3000);
});

btnClose.addEventListener("click", function () {
    yearBox.classList.add("hide");
    resultBox.classList.add("hide");
    yearContainer.classList.add("hide");
    btnStart.classList.toggle("hide");
    updateUI();
});

function updateUI() {
    inputYear.value = "";
    inputDay.value = "";
    inputMonth.value = "";
}
