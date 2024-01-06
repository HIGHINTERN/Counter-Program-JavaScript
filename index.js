const decbtn = document.getElementById("de");
const incbtn = document.getElementById("in");
const rebtn = document.getElementById("re");
const countl = document.getElementById("cl");

let count = 0;
incbtn.onclick = function(){
    count++;
    countl.textContent = count;
}
decbtn.onclick = function(){
    count--;
    countl.textContent = count;
}
rebtn.onclick = function(){
    count=0;
    countl.textContent = count;
}