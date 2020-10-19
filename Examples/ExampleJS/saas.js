let fruits = ["apple", "lemmon", "mango"];

let button_top = document.getElementById("button_top")
button_top.onclick = () =>{
    document.getElementById("button_top").style.color = "red";
};

let button_middle = document.getElementById("but_mid")
document.getElementById("but_mid").innerText = fruits;
button_middle.onclick = function () {
    fruits.push("Kiwi")
    document.getElementById("but_mid").innerText = fruits;
};

function openImg(){
    window.open("images/i_am_groot.jpg");
}