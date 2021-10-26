"use strict";

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

// #1
// ----------------------
// Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос: 'Сколько фильмов вы уже посмотрели?
// create variable to store answer data value from user
const numberOfFilms = Number(prompt(`Сколько фильмов вы уже посмотрели?`));

// т.о. мы задаем вопрос пользователю и сохраняем ответ в переменной 'const numberOfFilms' 

// #2
// ----------------------
// Создать объект personalMovieDB и в него поместить такие переменные count, movies, actors, genres для помещения value данных  
// create object to store data of key value pairs
const personalMovieDB = {
  // key value pairs

  // ответ пользователя
  count: numberOfFilms,

  // пустой объект
  movies: {},

  // пустой объект
  actors: {},

  // пустой массив
  genres: [],

  // boolean data value
  privat: false,
};

// т.о. мы создали объект с данными, где key is simply variable of data value

// #3 
// ----------------------
// Задайте пользователю по два раза вопросы и ответы стоит поместить в отдельные переменные 
const a = prompt("Один из последних просмотренных фильмов?"),
  b = prompt("На сколько оцените его?"),
  c = prompt("Один из последних просмотренных фильмов?"),
  d = prompt("На сколько оцените его?");

// т.о. мы создали переменные const a, b, c, d чтоб сохранить полученные ответы от пользователей  

// Записать ответы в объект movies
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

// NOTE: Use [] instead of '.' to access to the key values 

// Проверить, чтобы все работало без ошибок в консоли
console.log(personalMovieDB);

/*
'const' - is reserved js keyword to create constant variable containers to store data values 

'numberOfFilms' - is custom name of constant variable container

'=' - is js assignment operator to assign & store data values in variables 

'Number()' - is built-in js method to convert string data type values into number data type values

'prompt()' - is built-in js method to ask questions 

'(`Сколько фильмов вы уже посмотрели?`)' - is string data value to show to users 

';' - is js closing operator to close js statements 


*/
