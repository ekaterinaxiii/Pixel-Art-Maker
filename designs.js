// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//

function makeGrid() {
  $('#pixel_canvas').children().remove(); //erasure of existing grid
  let newHeight = $('#input_height').val();
  let newWidth = $('#input_height').val();
//rows
  for (i=1, i<newWidth, i++) {
    $('#pixel_canvas').appendChild('<tr></tr>');
  };
//cols
  for (j=1, j<newHeight, j++) {
    $('tr').appendChild('<td></td>');
  };

};


//event listener for creating the grid after submit button is pressed
$('#submit-button').on('click', makeGrid());

//color picker
function colorPicker() {
  let chosenColor = $('#colorPicker').val();
};

//aprxmt how coloring will work
$('td').on('click', paint() {
  color: chosenColor;
});
$('td').on('dblclick', paint() {
  color: none;
});
