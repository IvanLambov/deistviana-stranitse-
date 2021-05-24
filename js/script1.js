/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
document.addEventListener('DOMContentLoaded', () => {
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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    //sozdaem obrabot4ik sobitii
    addForm.addEventListener('submit', (event) => {
        //po umolceaniui stavim etu knopku 
        event.preventDefault();
        let newFilm = addInput.value;
        //provereaem galo4ika otmecena ili net 
        const favorite = checkbox.checked;
        if(newFilm){
            //2 Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
            if (newFilm.length>21) {
                newFilm= `${newFilm.substring(0,22)}...`;

            }
            if (favorite) {
                console.log('add your favorite movie');
            }
  //zapisivaem film v nashu bazu dannih 
  movieDB.movies.push(newFilm);
  //sort
  sortArr(movieDB.movies);
  createMovieList(movieDB.movies, movieList);
        }
      
event.target.reset();

    });
    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        //2 meneaem text 
        // Изменить жанр фильма, поменять //"комедия"
        //на "драма"

        genre.textContent = 'DRama';


        //3 meneaem kartinku ,raznie kavi4ki nujni Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
        //Реализовать только при помощи JS
        poster.style.backgroundImage = 'url("img/bg.jpg ")';
        //sperva udaliaem etot sverstannii spisok 
        //2 sposob  
        //adv.forEach(function(item){
        //item.remove();
        //});
    };

    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        //sortiruem
        //sozzdaem spisok 
        //otsortirovannie i pronumerovannii
        films.forEach((film, i) => {
            // += dopolnitelinoe prisvaivanie 
            //a=a+1; a+=1; indenti4no
            parent.innerHTML += `<li class="promo__interactive-item">${i+1} ${film}
                            <div class="delete"></div>
                        </li>`;
        });
        //3 При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    document.querySelectorAll('.delete').forEach((btn,i)=>{
      btn.addEventListener('click',()=>{
btn.parentElement.remove();
movieDB.movies.splice(i,1);
createMovieList(films, parent);
      });
    });
    }






    deleteAdv(adv);
    makeChanges();
    //sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
});