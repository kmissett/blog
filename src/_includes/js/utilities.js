/* remove all noscripts */
const noscripts = document.querySelectorAll(".noscript")
if (noscripts.length) noscripts.forEach(item => item.style.display = "none")

/* add copyright year to footer */
document.querySelector(".copyright span").innerHTML = ` ${new Date().getFullYear()}`