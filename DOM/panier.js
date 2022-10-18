function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  const buttonPlus  = document.querySelectorAll(".plus");
  console.log(buttonPlus)
 
  const buttonMinus  = document.querySelectorAll(".minus");
  


  for(let i = 0; i <buttonPlus.length; i++) {
  buttonPlus[i].addEventListener("click", function (e) { 
    let count =e.target.nextElementSibling
    count.innerHTML++

  }) ;
}
const  minusButton = document.querySelectorAll(".minus")
console.log(minusButton)
for(let i = 0; i <minusButton.length; i++) {
  minusButton[i].addEventListener("click", function (e) { 
    let count =e.target.previousElementSibling;
    if(count.innerHTML>0){
      count.innerHTML--
    }
  }) ;
}


function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}



