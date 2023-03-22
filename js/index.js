import dogs from "../js/data.js";
import Dog from "../js/Dog.js";

let currentDogIndex = 0;
let mainEl = null;

function init() {

    mainEl = document.querySelector('main');
    mainEl.addEventListener("click", handleClick)

    RenderPost(dogs[currentDogIndex])

}

function RenderPost(dog) {
    const dogProfileHtml = new Dog(dog).generatePostHtml();
    mainEl.innerHTML = dogProfileHtml;
}

function handleClick(e) {
    const targetData = e.target.dataset.icon
    const likeBadge = document.querySelector(".post__img-action")
    if (targetData) {
        if (targetData == "heart") {
            likeBadge.src = "/images/badge-like.png"
        } else {
            likeBadge.src = "/images/badge-nope.png"
        }
        setTimeout(getNextDog, 500)
    }

}

function getNextDog() {
    currentDogIndex++
    if (dogs[currentDogIndex]) {
        RenderPost(dogs[currentDogIndex])
    } else {
        mainEl.innerHTML = "<h2>there is no more dogs</h2>"
        setTimeout(()=>{
            currentDogIndex = 0
            RenderPost(dogs[currentDogIndex])
        }, 1000)

    }
}



document.addEventListener("DOMContentLoaded", init)