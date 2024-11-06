// 1. click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50%.

let a = document.getElementById("p");

let b = document.getElementById("btn");

function d() {
    a.style.backgroundColor = "red"
    a.style.fontSize = "60px"
    a.style.color = "white"
    a.innerHTML=`Content with image tag <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" width="200" style="border-radius:50%"/>`
}

// 2. click the button and display three images on clicking the button ft img should be of border radius 30px , second img should be border radius 100px , third img should be of border-radius 50%.

let s = document.getElementById("n");
let t = document.getElementById("btn1");

function c() {
    s.style.backgroundColor = "yellow"
    s.style.display = "block"
    s.style.padding = "25px"
    s.style.margin = "25px"
    s.innerHTML = `<img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" width="200" style="border-radius:30px"/> 
    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" width="200" style="border-radius:100px"/> 
    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" width="200" style="border-radius:50%"/>`
}
