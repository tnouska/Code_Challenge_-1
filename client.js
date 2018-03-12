$(document).ready(readyNow);

buttonClick = 1;


function readyNow() {
  addClickHandlers();
}

function addClickHandlers() {
  $('#genButton').on('click', createDiv);
  $('#holdDiv').on('click', '#swap', swapColor);
  $('#holdDiv').on('click', '#delButton', deleteDiv);
}

function createDiv() {
  let swapButton = '<button type="button" id="swap">Swap</button>';
  let deleteButton = '<button type="button" id="delButton">Delete</button>';
  let newDiv = '<div id="fullDiv"class="red div">'+ buttonClick + swapButton + deleteButton +'</div>';
  $('#holdDiv').append(newDiv);
  buttonClick ++;
}

function swapColor() {
  $(this).parent().toggleClass('red yellow');
}
function deleteDiv() {
  $(this).parent().remove();
}
