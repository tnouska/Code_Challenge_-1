$(document).ready(readyNow);

buttonClick = 1;


function readyNow() {
  addClickHandlers();
}

function addClickHandlers() {
  $('#genButton').on('click', createDiv);
  $('#holdDiv').on('click', '#fullDiv', swapColor);
}

function createDiv() {
  let swapButton = '<button type="button" id="swap">Swap</button>';
  let deleteButton = '<button type="button" id="delButton">Delete</button>';
  let newDiv = '<div id="fullDiv"class="redDiv">'+ buttonClick+ swapButton + deleteButton +'</div>';
  $('#holdDiv').append(newDiv);
  buttonClick ++;
}

function swapColor() {
  $(this).toggleClass('redDiv yellowDiv');
}
