$('#button01').click(() => {
   console.log('Yeah, you clicked me');
});

$('#button02').click(() => {
    $('#button01').text('Yeah');
 });

let colorValue = $('#color').val();

$('#button03').click(() => {
    $('#button01, #button02, #button03').css('background-color', colorValue);
});