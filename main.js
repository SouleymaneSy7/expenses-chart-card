import style from "./sass/main.scss";

const charts = document.querySelectorAll(".chart");

charts.forEach((chart) => {
  chart.addEventListener("mouseover", (event) => {
    let current = event.currentTarget.previousElementSibling;
    current.classList.remove("active");
    current.classList.add("active");

    setTimeout(() => {
      current.classList.remove("active");
    }, 1000);
  });
});
