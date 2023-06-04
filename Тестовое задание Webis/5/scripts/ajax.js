$(document).ready(function () {
  $('.calculator-form').on('submit', function (event) {
    event.preventDefault();

    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      data: formData,
      url: './process.php',
      success: function (data) {
        $('.calculator-form').find('input').val('');
        $('.result').html(data);
      },
      error: function () {
        $('.calculator-form').find('input').val('');
        $('.result').html('Что-то сломалось');
      },
    });
  });
});
