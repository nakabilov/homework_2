// // ================= task 1
// let a = 5;
// b = prompt('У квадратного стола отпилили один угол. Сколько теперь углов у него стало?');
// ================= task 2
// if (a > b || a < b ){
//     console.log('Неверно');
// }else {
//     console.log('Верно');
// }
// ================= task 2
// let child = 1;
// let teenager = 13;
// let adult = 18;
// let age = prompt('How old are you?');

// if ((child <= age) && (age <= teenager)) {
//     console.log(age, ' , MickeyMouse')
// }else if ((age > teenager) && (age < adult)) {
//     console.log(age, ' , Marvel');
// }else if (age >= adult){
//     console.log(age, ' Astral');
// }else {
//     console.log(age, ' error!');
// }
// ========================= task 3

//  let drinkLove = prompt('Your favorite drink ?');
//  switch (drinkLove) {
//     case  'beer' : 
//     case  'vodka' : 
//     case  'whisky' : 
//         console.log('Алкоголь оказывает токсическое действие на нервную систему – мозг, а также происходит ухудшение зрения, речи и нарушается координация движений. ');
//         break;
//     case  'coffee' : 
//         console.log('В больших количествах кофеин может вызвать возбуждение, тревогу, тремор, учащенное сердцебиение, повышение давления.');
//         break;
//     case 'water' :
//         console.log('Отлично: Польза воды для организма человека неоценима.');
//         break;
//     default:
//         console.log('Класно!');
//         break;
//  }
// ========================= task 4

// let number = 10;
// //  if (number = 11)  ошибка в том что оператор ' = ' он присваивает обратно на 11
// if (number == 11)  // а этот оператор сравнивает значания чтобы код работал корректно
// {
//      alert('Number is 11!');
//  } else {
//      alert('Number is 10!');
//  }

// ========================= task 5

// 1.(2 < 3) && (3 > 4) || true
// 2.true && false || true
// 3.false || true
// 4.true

// 1.!true && (!true || 100 != 5 * 5)
// 2.false && false || true
// 3.false || true 
// 4.true
// 1.("123" == 123) || ((10 <= 10) && ('' === false))
// 2.false || true && false
// 3.false || false
// 4.false

// ========================= task 6
// isRaining = true;
// isSunny = false;

// isRaining = true;
// isSunny = true;
// let result = isRaining && isSunny;
// if (isRaining && isSunny) {
//     console.log(result);
// }else if (isRaining || isSunny){
//     console.log(result);
// }
// ========================= task 7
// let numberAsString = '42';
// const numberFourty = parseInt(numberAsString);
// let numberTen = 10;
// result = console.log(numberFourty + numberTen);
// ========================= task 8
// let ageLine = 18;
// const age = parseInt(prompt('Сколько вам лет ?'));
// if (age >= ageLine) {
//     alert(`Поздравляем, Тебе ${age} лет !`)
// }else {
//     alert(`Не допуск, Тебе ${age} лет !`)
// }
// ========================= task 9
// const isWeekend = false;
// const hasTimeOff = true;
// let result = hasTimeOff;
// if(result) {
//     alert('У вас есть выходные и вы можете отдохнуть!')
// }else {
//     alert('Жаль надо работать !')
// }
// ========================= task 10
//  const pass = 'MySecretPassword123';
// if (pass.length && pass[0] === pass[0].toLocaleUpperCase() && (/\d/.test(pass) )) {
//     console.log('Пароль допустим');
// }else {
//     console.log('Пароль недопустим');
// }
// ========================= task 11
// const studentGrade = prompt ('Оценка за экзамен')

// if (studentGrade >= 90) {
//     alert ('Отлично !');

// } else if (studentGrade >= 70 && studentGrade < 90) {
//     alert ('Хорошо !');

// }else if (studentGrade < 70) {
//     alert('Попробуйте еще раз !')
// }   
//  else  {
//     alert ('Неправильная оценка !');
// }
// ========================= task 12
// let currentDate = new Date('2023-09-01');
// let date = prompt('Напишите дату')
// if (currentDate >= date) {
//     alert('Добро пожаловать!')
// }else {
//     alert('Скоро начнем')
// }

