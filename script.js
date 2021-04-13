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

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    
    rememberMyFilms: function () {
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
    },
    
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов.");
        } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
            alert('Вы классический зритель)');
        } else if(personalMovieDB.count > 30){
            alert('Вы киноман!!');
        } else{
            alert('произошла ошибка:(');
        }
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
            console.log('Приватность включена')
        } else {
            personalMovieDB.privat = false;
            console.log('Приватность отключена')
        }
    },
    
    showMyDB: function (){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        } else{
            console.log('Вы пытались просмотреть приватную информацию');
        }
    },
    
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let a =prompt(`Ваш любимый жанр под номером ${i+1}?`);
            if (a != null && a!= ''){
                personalMovieDB.genres[i] = a;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i, arr){
            console.log(`Любимый жанр ${i+1} - ${item}`);
        });
    }
};
