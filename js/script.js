"use strict";

let searchBlock = document.querySelector(".input");
let searchBlockButton = document.querySelector(".button--hover");
let errorMessage = document.querySelector(".error-message");
let errorSymbol = document.querySelector(".error-symbol");


searchBlockButton.addEventListener("click", function (){
   try{
      if(!searchBlock.value.includes("@")) {throw "Please provide a valid email"}
      else {
         errorMessage.innerHTML = "";
         errorSymbol.style.display = "none";
         searchBlock.style.border = "";
      }
   }

   catch (err){
      errorMessage.innerHTML = err;
      errorSymbol.style.display = "block";
      searchBlock.style.border = "1px solid red";
   }

   finally {
      searchBlock.value = "";
   }
})
