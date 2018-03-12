$(document).ready(readyNow);

buttonClick = 1;


function readyNow() {
  addClickHandlers();
}

function addClickHandlers() {
  $('#genButton').on('click', createDiv);
}

function createDiv() {
  let newDiv = '<div class="divItem">'+ buttonClick +'</div>';
  $('#holdDiv').append(newDiv);
  buttonClick ++;

}
