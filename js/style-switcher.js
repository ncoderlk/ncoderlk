//Theme setting function
document.addEventListener("DOMContentLoaded", function () {
    const theme = document.getElementById("site-theme");
    let particleColor;
    const hour = new Date().getHours();
    if (hour > 7 && hour < 18) {
        theme.href = "./css/style-light.css";
    } else {
        theme.href = "./css/style-dark.css";
    }
})