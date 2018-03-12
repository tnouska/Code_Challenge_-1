$(document).ready(readyNow);

function readyNow() {
  addClickHandlers();
}

function addClickHandlers() {
  $('#genButton').on('click', createDiv);
}

function createDiv() {
  let newDiv = '<div class="divItem"></div>';
  $('#holdDiv').append(newDiv);
}
