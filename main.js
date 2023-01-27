const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const mins = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')
console.log(days)

const newYears = '1 Jan 2024'

function conuntDown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  let dateSec = Math.floor((newYearsDate - currentDate) / 1000 % 60).toString().slice(-2)
  let dateMin = Math.floor((newYearsDate - currentDate) / 1000 / 60 % 60).toString().slice(-2)
  let dateHours = Math.floor((newYearsDate - currentDate) / 1000 / 60 / 60 % 24).toString().slice(-2)
  let dateDays = Math.floor((newYearsDate - currentDate) / 1000 / 60 / 60 / 24).toString().slice()

  function formatNumber(num) {
    return num < 10 ? `0${num}` : num;
  }
  
   dateSec = formatNumber(dateSec);
   dateMin = formatNumber(dateMin);
   dateHours = formatNumber(dateHours);
   dateDays = formatNumber(dateDays);
  

  seconds.innerHTML = dateSec
  mins.innerHTML = dateMin
  hours.innerHTML = dateHours
  days.innerHTML = dateDays
}

setInterval(conuntDown, 1000)