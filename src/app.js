window.onload = function () {
  main();
};

function main() {
  let date = new Date();
  const timerContainer = document.getElementById("count-down");
  const days = document.getElementById("day");
  const hours = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  let sec = parseInt(second.innerHTML);
  let min = parseInt(minute.innerHTML);
  let hour = parseInt(hours.innerHTML);
  let day = parseInt(days.innerHTML);

  let clearId = setInterval(() => {
    if (sec == 0) {
      sec = 60;
      min--;
    }
    sec--;
    // second
    if (sec < 10) {
      second.innerHTML = "0" + sec;
    } else {
      second.innerHTML = sec;
    }
    // minute
    if (min == 0) {
      min = 59;
      hour--;
    }
    if (min < 10) {
      minute.innerHTML = "0" + min;
    } else {
      minute.innerHTML = min;
    }
    // hour
    if (hour == 0) {
      hour = 23;
      day--;
    }
    if (hour < 10) {
      hours.innerHTML = "0" + hour;
    } else {
      hours.innerHTML = hour;
    }
    // day
    if (day < 10) {
      days.innerHTML = "0" + day;
    } else {
      days.innerHTML = day;
    }
    if (day == 0 && hour == 0 && min == 0 && sec == 0) {
      clearInterval(clearId);
    }
  }, 1000);
}

// function createElement(parent) {
//   const div = document.createElement("div");
//   const h1 = document.createElement("h1");
//   const p = document.createElement("p");
//   div.appendChild(h1);
//   div.appendChild(p);
//   parent.appendChild(div);
// }
