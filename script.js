const slackUserName = document.querySelector('[data-testid=slackUserName]');
const currentDayOfTheWeek = document.querySelector('[data-testid=currentDayOfTheWeek]');
const currentUTCTime = document.querySelector('[data-testid=currentUTCTime]');

// set slack name
slackUserName.textContent = "Abiodun Omirinde";

// function to update day of week
function updateDayOfWeek(){
    const daysOfWeek = ["Sunday","monday","Tuesday","Wednessday","Thursday","Friday","Saturday"];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    currentDayOfTheWeek.textContent = daysOfWeek[dayIndex];

}

// funtion to update the current  UTC time in milli

function updateUTCTime(){
    const currentDate = new Date();
    currentUTCTime.textContent= currentDate.getTime();
}

// update the day of the week and UTC every time

updateDayOfWeek();
updateUTCTime();

// this code update UTc  per seconds
setInterval(updateDayOfWeek,1000);
setInterval(updateDayOfWeek,1000);