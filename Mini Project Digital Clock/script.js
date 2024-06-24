let indiv = document.querySelector(".innercontainer");

function showtime() {
  const obj = new Date();
  let hr = obj.getHours();
  let min = obj.getMinutes();
  let sec = obj.getSeconds();
  let am_pm = "AM";

  if (hr == 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12;
    am_pm = "PM";
  }

  hr = hr < 10 ? `0${hr}` : hr;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  let time = `${hr}:${min}:${sec} ${am_pm}`;
  indiv.innerHTML = time;
  indiv.textContent = time;
  setTimeout(showtime, 1000);
}

showtime();
