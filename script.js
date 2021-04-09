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

let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = prompt('На сколько оцените его?','');
        if (b != null && a != null && a != '' && a.length < 50 && b != ''){
            personalMovieDB.movies[a] = b;
            console.log('мы записали ваш фильм');
        } else{
            console.log('неправильный формат ввода');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов.");
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert('Вы классический зритель)');
    } else if(personalMovieDB.count > 30){
        alert('Вы киноман!!');
    } else{
        alert('произошла ошибка:(');
    }
}

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } else{
        console.log('Вы пытались просмотреть приватную информацию');
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
    }
}

start();
showMyDB();
writeYourGenres();
console.log(personalMovieDB);
