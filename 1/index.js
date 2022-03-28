/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false
};

/*let seeLastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
let score1 = prompt('На сколько оцените его?');
let seeLastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
let score2 = prompt('На сколько оцените его?');

personalMovieDB.movies[seeLastFilm1] = score1;
personalMovieDB.movies[seeLastFilm2] = score2;*/

let seelastFilm;
let score;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        //вопросы для пользователя
        seelastFilm = prompt('Один из последних просмотренных фильмов?', '');
        score = prompt('На сколько оцените его?'); 
    
        if(seelastFilm != null && score != null && seelastFilm != '' && score != '' && seelastFilm.length < 50){
            //запись ответов, если выполнено условие
            personalMovieDB.movies[seelastFilm] = score;
            } 
            else {
                i--; //вернуться на 1 условие назад
            }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
        console.log("Вы классический зритель");
        } else if(numberOfFilms > 30) {
            console.log("Вы киноман");
            } else{
                console.log("Произошла ошибка");
            }
}

detectPersonalLevel();

function showMyBD(objectProperty) {
   if(!objectProperty){
      console.log(personalMovieDB); 
   }
}

showMyBD(personalMovieDB.privat);

function writeYourGenres() {
    for (let index = 1; index <= 3; index++) {
        const genre = prompt(`Ваш любимый жанр под номером ${index}`);
        personalMovieDB.genders[index - 1] = genre;
    }
}

writeYourGenres();
