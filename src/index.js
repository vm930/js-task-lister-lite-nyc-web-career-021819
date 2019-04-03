const form = document.querySelector("#create-task-form")
const inputTag = document.querySelector("#new-task-description")
let taskUlTag = document.querySelector("#tasks")
// let task = document.querySelectorAll("li")
document.addEventListener("DOMContentLoaded", () => {


form.addEventListener("submit",function(e){
  e.preventDefault();
  //grab the user input from the input text 
  //create new li list 
  let newLi = document.createElement("li")
  //assign li to the new element
  //create a button tag
  let newButton = document.createElement("button")
  newButton.innerText = "X"
  newButton.dataset.description = "cross-list"
  newLi.textContent = inputTag.value
  newLi.appendChild(newButton);
  
  //add li list to the paragrah
  taskUlTag.appendChild(newLi)
  // inputTag.value = ""
  form.reset()
})

  // btn.addEventListener('click', function (e) {
  //   e.target.parentNode.remove()
  // })


 taskUlTag.addEventListener("click",function(e){
  // console.log(e.target)

   if (e.target.dataset.description === "cross-list"){
     e.target.parentNode.remove()
   }
})

   // console.dir(e.target)
  //  console.log(e.target.dataset.description)
  //  document.querySelector('li')

});
