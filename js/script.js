/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//отсортировать по алФАВИТУ



// 1 zadanie,udaliti reklamu
//const promo__adv= document.getElementsByClassName('promo__adv');
//console.log(promo__adv);
//promo__adv[0].remove();
//poluceaem vse elementi 
//vnutri klassa .promo__adv mi polucim vse kartinki 
//vse klassi 4erez tociku obozb=naceaiutsea 
const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    //pokazivaem 4to genre esti v promo__bg
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});
//2 sposob  
//adv.forEach(function(item){
//item.remove();
//});
//2 meneaem text 
// Изменить жанр фильма, поменять //"комедия"
//на "драма"

genre.textContent = 'DRama';


//3 meneaem kartinku ,raznie kavi4ki nujni Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
poster.style.backgroundImage = 'url("img/bg.jpg ")';
//sperva udaliaem etot sverstannii spisok 
movieList.innerHTML = "";
//sortiruem
movieDB.movies.sort();
//sozzdaem spisok 
//otsortirovannie i pronumerovannii
movieDB.movies.forEach((film, i) => {
    // += dopolnitelinoe prisvaivanie 
    //a=a+1; a+=1; indenti4no
    movieList.innerHTML += `<li class="promo__interactive-item">${i+1} ${film}
                            <div class="delete"></div>
                        </li>`;
});