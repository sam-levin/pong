var paddle1 = document.querySelector("#p1");
var paddle2 = document.querySelector("#p2")

let paddle1__coord = paddle1.getBoundingClientRect();
let paddle2_coord = paddle2.getBoundingClientRect();

console.log(paddle1__coord)

document.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        console.log("penis")
    } else if (e.key == "ArrowDown") {
        console.log("keydonw")
    } else if (e.key == "ArrowUp") {
        console.log("keyup")
    }
});