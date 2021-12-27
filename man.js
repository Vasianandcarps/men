function Man(name, surname) {
    this._name = name;
    this._surname = surname;
    this.about = function () {
      document.write('Имя: ' + this._name  + "<br>" + ' Фамилия: ' + this._surname  + "<br>");
    };
 }
 
//  let man = new Man("Вася", "Петров");
//  man.about(); 

 
//  function Student(name, surname, school) {
//     Man.apply(this, arguments); // передаем аргументы name и surname родителю
//     this._school = school; // school - аргумент только для Student
 
//     let parentAbout = this.about; // сохраняем метод родителя
 
//     this.about = function () { // изменяем метод родителя
//       parentAbout.call(this); // вызываем метод родителя, передавая ему this
//       document.write('Учебное заведение: ' + this._school); // дописываем свои действия
//     }
//  }

//  let student = new Student("Вася", "Петров", "ХНУРЕ");
//  student.about(); // Имя: Вася Фамилия: Петров Учебное заведение: ХНУРЕ
 let employer = new Employer("Петя", "Карасенко", "магазин","5 лет" );
 employer.about();

 function Employer(name, surname, work,exp) {
    Man.apply(this, arguments); // передаем аргументы name и surname родителю
    this._work = work; // school - аргумент только для Student
    this._exp =exp; 
    let parentAbout1 = this.about; // сохраняем метод родителя
 
    this.about = function () { // изменяем метод родителя
      parentAbout1.call(this); // вызываем метод родителя, передавая ему this
      document.write('Место работы: ' + this._work + "<br>"); // дописываем свои действия
      document.write('Стаж: ' + this._exp);
    }
 }