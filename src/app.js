const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// Giveaway Ends On Sunday, 24 April 2020 8:00am
const giveaway = document.getElementById("giveaway");
const deadline = document.getElementById("deadline");
const items = document.querySelectorAll(".deadline-format h1");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.innerHTML = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minute}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;
  /**
   * 1s = 1000m
   * 1m = 60s
   * 1hr = 60m
   * 1d = 24hr
   */
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // values in array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(id);
    deadline.innerHTML = `<h4>Sorry, this giveaway has expired!</h4>`;
  }
}
// countdown
const id = setInterval(getRemainingTime, 1000);
getRemainingTime();
