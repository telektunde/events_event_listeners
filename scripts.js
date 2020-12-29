$('#button01').click(() => {
   console.log('Yeah, you clicked me');
});

$('#button02').click(() => {
    $('#button01').text('Yeah');
 });

 $('#button03').click(() => {
    $('#button01').css('background-color', 'blue');
    $('#button02').css('background-color', 'yellow');
    $('#button03').css('background-color', 'red');
 });