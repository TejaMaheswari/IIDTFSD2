const code = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function(){
    let clrcode = "#";
    for(let i=0;i<6;i++){
        clrcode += code[getRandomNumber()];
    }
    color.textContent=clrcode;
    document.body.style.backgroundColor=clrcode;
});

function getRandomNumber(){
    return Math.floor(Math.random()*code.length);
}