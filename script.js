// let result;

// c=prompt("c");
// d=prompt("d");

// (c+d>4) ? result="Много" : result="Мало";

// alert(result);



//-------------------------------------------------------------//

// let login = prompt("login");

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// (login == "Сотрудник") ? message = "Привет" :
// (login == "Директор") ? message = "Здравствуйте" :
// (login == "") ? message = "Нет логина" : message = "";

// alert(message);

//------------------------------------------------------------------//

// Оператор нулевого слияния

// Результат выражения a ?? b будет следующим:

// если a определено, то a,
// если a не определено, то b.

// let user_name = "null";
// alert(user_name || "Лох");

// let i = 3;
// while (i) alert(i--);

// for (let i = 0; i < 10; i++) {
//    if (i%2==0) continue;
//    alert(i);
// }

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
  
//       // если пустая строка или Отмена, то выйти из обоих циклов
//       if (!input) break outer; // (*)
  
//       // сделать что-нибудь со значениями...
//     }
//   }
  
//   alert('Готово!');

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const numbe = +prompt('Введите число между 0 и 3', '');
// switch(numbe){
//     case 0:
//         alert("Вы ввели число 0");
//         break;
//     case 1:
//         alert("Вы ввели число 1")
//         break;
//     case 2:
//     case 3:
//         alert("Вы ввели число 2 или 3")
//         break;
// }

// function showMessage(aboba) {
//     alert(aboba);
//   }

// showMessage("Привет,друг!")

// let sayHi = function() {
//   alert( "Привет" );
// };


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);