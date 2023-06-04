<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-ComMaxpatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Test 2</title>
  </head>
  <body>
    <div class="form-wrap">
      <p>Введите выражение:</p>
      <form action="process.php" method="POST" class="calculator-form">
        <input name="expression" class="input-field" type="text" />
        <button class="calculate-button button" type="submit">=</button>
        <button class="reset-button button" type="button">Сброс</button>
      </form>
      <div class="result">Результат</div>
    </div>
    
    <script
      src="https://code.jquery.com/jquery-3.6.1.js"
      crossorigin="anonymous"
    ></script>
    <script src="scripts/script.js"></script>
    <script src="scripts/ajax.js"></script>
  </body>
</html>
