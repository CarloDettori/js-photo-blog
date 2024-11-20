"use strict"
console.clear()

let polaroidBox = document.getElementById("polaroid-box");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((ans) => {
    let deck = ""
    for (let i = 0; i <= 5; i++) {
        console.log(ans.data[i].title)
        deck += `
        <div id="polaroid-1" class="polaroid">
                    <img id="pin" src="./img/pin.svg" alt="">
                    <img class="debug" id="" src="./img/aspect-ratios-blogpost-1x1-1.png" alt="image">
                    <p class="debug">${ans.data[i].title}</p>
                </div>
                `
    }
    polaroidBox.innerHTML = deck;
})
    .catch((error) => {
        console.log(error);
    })


