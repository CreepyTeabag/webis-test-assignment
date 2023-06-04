<?php
   $allowedChars = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.', '*', '-', '+', '/');
   $operations = array('*', '-', '+', '/');
   $exprInput = $_POST["expression"];

   //Значения по умолчанию
   $result = '';
   $str = '';
   $elements = array();
   $operation = '+';

   function returnResult($result) {
      echo $result;
   }

   function calculateResult($strArr, $operation, $result) {
      global $str;
      $str = implode('', $strArr);
      $elements = explode($operation, $str);
      $el1 = (float)$elements[0];
      $el2 = (float)$elements[1];

      if ($operation == '/' and $el2 == 0) {
         $result = 'Деление на 0 запрещено';
      } else {
         switch ($operation) {
            case '*':
               $result = $el1 * $el2;
               break;
            case '+':
               $result = $el1 + $el2;
               break;
            case '/':
               $result = $el1 / $el2;
               break;
            case '-':
               $result = $el1 - $el2;
               break;
         }
      }
      returnResult($result);
   }

   function checkInput() {
      global $exprInput, $allowedChars, $operations, $result;
      $operationsNumber = 0;

      //Приведение строки в правильный вид: без пробелов; с заменой запятых на точки
      $trimmed = trim($exprInput);
      $noSpaces = preg_replace('/\s+/', '', $trimmed);
      $noCommas = str_replace(',', '.', $noSpaces);
      $strArr = array();
      $strArr = str_split($noCommas, 1);
      $strArrLength = count($strArr);

      foreach($strArr as $i => $char) {
         $isAllowed = in_array($char, $allowedChars);
         if (!$isAllowed) {
            $result = 'Вы ввели некорректное выражение';
            break;
         } else if (in_array($char, $operations)){
            ++$operationsNumber;
            $operation = $char;
         }
      }

      if ($operationsNumber < 1 && $result == '') {
         $result = 'Введите операцию';
         } else if ($operationsNumber > 1 && $result == '') {
         $result = 'Вы ввели слишком много операций!';
         } else if ($result == '') {
         calculateResult($strArr, $operation, $result);
         }

      returnResult($result);

   }
   checkInput();

?>