// progress 
const slider = document.getElementById("range"),
      progressBar = document.getElementById("progress-bar"),
      pageviews = document.querySelector(".pageviews"),
      checkbox = document.querySelector(".switch input"),
      span = document.querySelector(".price span");

slider.oninput = function () {
    progressBar.style.width = this.value + "%";
    changingPrice();
}

// changing price
function changingPrice () {
    if(slider.value < 25) {
        span.innerHTML = "$" + 8 + ".00";
        pageviews.innerHTML = "50k pageviews"
    } else if (slider.value <= 50) {
        span.innerHTML = "$" + 16 + ".00";
        pageviews.innerHTML = "100k pageviews";
    } else if (slider.value <= 75) {
        span.innerHTML = "$" + 32+ ".00";
        pageviews.innerHTML =  "150k pageviews"
    } else {
        span.innerHTML = "$" + 40 + ".00";
        pageviews.innerHTML = "200k pageviews"
    }
} 