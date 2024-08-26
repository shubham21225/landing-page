let nav = document.querySelector("nav");
let slider = document.querySelector("#slider");

let logo = document.querySelector("#nav-part2 i")
var check = 0;

if(check == 0 )


logo.addEventListener("click",function(){
   if(check==0){
      slider.style.display="flex";
      check = 1;
   }
   else {
      slider.style.display="none";
      check = 0;
   }
})
