const btn1= document.querySelector("#qst1");
const btn2= document.querySelector("#qst2");
const btn3= document.querySelector("#qst3");
const btn4= document.querySelector("#qst4");
const btn5= document.querySelector("#qst5");
const btn6= document.querySelector("#qst6");
let list = document.querySelectorAll(".question")


btn1.addEventListener("click",distroy);
btn2.addEventListener("click",distroy);
btn3.addEventListener("click",distroy);
btn4.addEventListener("click",distroy);
btn5.addEventListener("click",distroy);
btn6.addEventListener("click",distroy);

function distroy(){
  list.forEach(answer => {
    if(answer.lastElementChild.style.display == "block" && 
    answer.firstElementChild !=this){
      answer.firstElementChild.lastElementChild.style.transform="rotate(-45deg)";
      answer.lastElementChild.style.display="none";
    }
  });
  let elemnet = this.nextElementSibling;
  if(elemnet.style.display == "none"){
    this.lastElementChild.style.transform="rotate(45deg)";
    elemnet.style.display="block";
  
  }else{
    this.lastElementChild.style.transform="rotate(0deg)";
    elemnet.style.display ="none";
  }
}