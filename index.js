/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(e){
  if (e<12){
    return "Good Morning before 12pm"
  }

}

/* Write your implementation of greet() */


/* Write your implementation of displayMessage() */
function displayMessage(message) {
document.getElementById("greeting").innerText= message

}