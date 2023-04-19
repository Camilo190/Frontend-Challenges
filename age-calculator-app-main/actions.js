const resultYear = document.querySelector(".r-year");
const resultMonth = document.querySelector(".r-month");
const resultDay = document.querySelector(".r-day");
const labelDay = document.querySelector(".label-d");
const labelMonth = document.querySelector(".label-m");
const labelYear = document.querySelector(".label-y");
const inputYear = document.getElementById("year");
const inputMonth = document.getElementById("month");
const inputDay = document.getElementById("day");
const errorYear = document.querySelector(".year-error");
const errorMonth = document.querySelector(".month-error");
const errorDay = document.querySelector(".day-error");
const currentDate = new Date();
const redColor = "hsl(0, 100%, 67%)";
const grayColor = "hsl(0,0%,8%)";
const smokeyGrayColor = "hsl(0, 1%, 44%)";
const fullDaysMonths = [1,3,5,7,8,10,12];
/**
 * action button
 */
const submit = document.querySelector(".img");
submit.addEventListener("click", () => {
    if (validateForm()) {
        currentDay = currentDate.getDate();
        currentMonth = currentDate.getMonth()+1;
        currentYear = currentDate.getFullYear();
        year = currentYear - inputYear.value;
        month = currentMonth - inputMonth.value;
        day = currentDay - inputDay.value;
        if (day < 0) {
            day = day + 31;
            month = month - 1;
        }
        if (month < 0) {
            month = month + 12;
            year = year - 1;
        }
        resultDay.innerHTML = day;
        resultMonth.innerHTML = month;
        resultYear.innerHTML = year;

    } else {
        cleanForm();
    }
});

/**
 * Validate that every input has valid data
 * @returns true if day, month and year inputs are ok; false otherwise
 */
function validateForm() {
    isDateOk = validateDay();
    isMonthOK = validateMonth();
    isYearOk = validateYear();
    return isDateOk && isMonthOK && isYearOk;
}

/**
 * Validate day input
 * @returns true if day input has valid data; false otherwise
 */
function validateDay() {
    if (/^\d+$/.test(inputDay.value) && inputDay.value <= 31) {
        if ((!tod()) || (!leapYear() && inputMonth.value == 2)){
           errorMessage("Must be a valid date",1);
           return false
       }
        cleanErrorsDay();
        return true;
    }
    if (inputDay.value === "") {
        errorMessage("This field is required",1);
    } else if (inputDay.value > 31) {
        errorMessage("Must be a valid day",1);
    } else {
        errorMessage("Data type invalid",1);
    }
    return false
}

/**
 * Validate month input
 * @returns true if month input has valid data; false otherwise
 */
function validateMonth() {
    if (/^\d+$/.test(inputMonth.value) && inputMonth.value <= 12) {
        if (inputYear.value == currentDate.getFullYear()
         && inputMonth.value > currentDate.getMonth()+1) {
           errorMessage("Date must be lower or equal than current",1);
           return false
       }
        cleanErrorsMonth();
        return true;
    }
    if (inputMonth.value === "") {
        errorMessage("This field is required",2);
    } else if (inputMonth.value > 12) {
        errorMessage("Must be a valid month",2);
    } else {
        errorMessage("Data type invalid",2);
    }
    return false
}

/**
 * Validate year input
 * @returns true if year input has valid data; false otherwise
 */
function validateYear(){
    if (/^\d+$/.test(inputYear.value)) {
        if (currentDate.getFullYear() < inputYear.value) {
            errorMessage("Must be in the past",3);
            return false;
        }
        cleanErrorsYear();
        return true;
    }
    if (inputYear.value === "") {
        errorMessage("This field is required",3);
    } else {
        errorMessage("Data type invalid",3);
    }
    return false
}
/**
 * Validate if year on input is a leapYear and calculate if the date exists.
 * @returns true if the date exists; false if not
 */
function leapYear() {
    if (inputYear.value%4 == 0 && inputYear.value%100 == 0 && inputYear.value%400 == 0) {
        if (inputDay.value < 30) {
            return true;
        }
    } else if (inputDay.value < 29){
        return true;
    } else
    return false;
}
/**
 * Validate which months have 31 days and which 30 days.
 * @returns true if the month has 31 days and input day value is less than 32 or
 * if the month has 30 days and the input day value is less than 31; false other wise
 */
function tod(){
    if (fullDaysMonths.includes(Number(inputMonth.value))) {
        return inputDay.value < 32;
    } else{
        return inputDay.value < 31;
    }
}

/**
 * Create error messages for every input
 * @param {string} msg Messange to be printed 
 * @param {number} key Key associated to one the inputs
 */
function errorMessage(msg, key) {
    switch (key) {
        case 1:
            errorDay.innerHTML = msg;
            inputDay.style.borderColor = redColor;
            labelDay.style.color = redColor;
            break;
        case 2:
            errorMonth.innerHTML = msg;
            inputMonth.style.borderColor = redColor;
            labelMonth.style.color = redColor;
            break;
        case 3:
            errorYear.innerHTML = msg;
            inputYear.style.borderColor = redColor;
            labelYear.style.color = redColor;
            break;
        case 4:
            errorDay.innerHTML = msg;
            errorMonth.innerHTML = msg;
            errorYear.innerHTML = msg;
            break;
        }
}
/**
 * Clear the form
 */
function cleanForm() {
    resultYear.innerHTML = "--";
    resultMonth.innerHTML = "--";
    resultDay.innerHTML = "--";
}
/**
 * Clean the errors messages of the day input
 */
function cleanErrorsDay() {
    inputDay.style.borderColor = grayColor;
    errorDay.innerHTML = "";
    labelDay.style.color = smokeyGrayColor;
}
/**
 * Clean the errors messages of the month input
 */
function cleanErrorsMonth() {
    inputMonth.style.borderColor = grayColor;
    errorMonth.innerHTML = "";
    labelMonth.style.color = smokeyGrayColor;
}
/**
 * Clean the errors messages of the year input
 */
function cleanErrorsYear() {
    inputYear.style.borderColor = grayColor;
    errorYear.innerHTML = "";
    labelYear.style.color = smokeyGrayColor;
}