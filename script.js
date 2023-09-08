let date = new Date();
let userDay = document.getElementById("Day");
let userMonth = document.getElementById("Month");
let userYear = document.getElementById("Year");
let yearPrint = document.querySelector("span.year");
let monthPrint = document.querySelector("span.month");
let dayPrint = document.querySelector("span.day");
let run = document.querySelector(".btn");
run.addEventListener("click", () => {
  if (userDay.value != "" && userMonth.value != "" && userYear.value != "") {
    if (userYear.value < 2023 && userYear.value > 1980) {
      yearPrint.innerHTML = `${Math.abs(date.getFullYear() - userYear.value)}`;
    } else {
      const p = document.createElement("p");
      p.className = "validError";
      p.innerHTML = `Year Not Valid`;
      userYear.parentElement.appendChild(p);
    }
    if (userMonth.value < 13 && userMonth.value > 0) {
      monthPrint.innerHTML = `${Math.abs(date.getMonth() - userMonth.value)}`;
    } else {
      const p = document.createElement("p");
      p.className = "validError";
      p.innerHTML = `Month Not Valid`;
      userMonth.parentElement.appendChild(p);
    }
    if (userDay.value < 31 && userDay.value > 0) {
      dayPrint.innerHTML = `${Math.abs(date.getDay() - userDay.value)}`;
    } else {
      const p = document.createElement("p");
      p.className = "validError";
      p.innerHTML = `Day Not Valid`;
      userDay.parentElement.appendChild(p);
    }
    userDay.value = "";
    userMonth.value = "";
    userYear.value = "";
  } else {
    if (userYear.value === "") {
      const p = document.createElement("p");
      p.className = "validError";
      p.innerHTML = `This Field Is required`;
      userYear.parentElement.appendChild(p);
    }
    if (userMonth.value === "") {
      const p = document.createElement("p");
      p.className = "validError";
      p.innerHTML = `This Field Is required`;
      userMonth.parentElement.appendChild(p);
    }
    if (userDay.value === "") {
      const p = document.createElement("p");
      p.className = "validError";
      p.innerHTML = `This Field Is required`;
      userDay.parentElement.appendChild(p);
    }
  }
});
