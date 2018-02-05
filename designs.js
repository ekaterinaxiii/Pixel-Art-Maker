// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let table = $('#pixel_canvas');
let chosenColor = $('#colorPicker').val();

function makeGrid() {
  table.children().remove(); //erasure of existing grid
  let newHeight = $('#input_height').val();
  let newWidth = $('#input_width').val();
//rows
  for (r=0, r<newHeight, r++) {
    table.append('<tr></tr>');
//cols
    for (c=0, c<newWidth, c++) {
        table.children().last().append('<td></td>');
    };
  };
};
//preventing reload
$("input[type='submit']").click(function(event) {
  event.preventDefault();
  makeGrid();
});


//coloring on click
table.on('click', 'td', coloring() {
		$(this).css('background-color', chosenColor);
	});
//removing color on double click
table.on('dblclick','td', removeColor() {
   $(this).css('background-color', none)
});
