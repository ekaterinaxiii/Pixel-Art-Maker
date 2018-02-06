// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let table = $('#pixel_canvas');

function makeGrid() {
  table.children().remove(); //erasure of existing grid
  let newHeight = $('#input_height').val();
  let newWidth = $('#input_width').val();
//rows
  for (let r=0; r<newHeight; r++) {
    table.append('<tr></tr>');
//cols
    for (let c=0; c<newWidth; c++) {
        table.children().last().append('<td></td>');
    };
  };
};
//preventing reload
$('#sizePicker').submit(function(event) {
	event.preventDefault();
	makeGrid();
});

//coloring on click
table.on('click', 'td', function() {
  $(this).css('background-color', $('#colorPicker').val());
	});
//removing color on double click
table.on('dblclick','td', function() {
   $(this).css('background-color', '');
});
