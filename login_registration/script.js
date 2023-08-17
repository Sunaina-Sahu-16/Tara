// const form =document.querySelector("form"),
//       nextbtn = form.queryselector(".nextbtn"),
//       backbtn = form.querySelector(".backbtn"),
//       allInput = form.querySelectorAll(".first input");

// nextbtn.addEventListener("click",() => {
//     allInput.forEach(input => {
//         if(input.value !=""){
//             form.classList.add('secActive');
//         }
//     })
// })

// backbtn.addEventListener("click", () => form.classList.remove('secActive'));

// $("#submitForm").click(function() {
//     alert("The Form has been Submitted.");
//  });
function required()
{
var empt = document.forms["form2"]["text1"].value;
if (empt == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}
function required(inputtx) 
   {
     if (inputtx.value.length == 0)
      { 
         alert("message");  	
         return false; 
      }  	
      return true; 
    } 

    function myFunction() {
        alert("The form has been submitted");
    }