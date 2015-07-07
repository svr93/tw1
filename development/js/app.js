/* jshint multistr: true */
(function (window, document) {
  'use strict';

  var data = {};

  /* ----- peoples ----- */

  data.peoples = {};
  var header = [
    { field: 'name', title: 'Читатель' },
    { field: 'level', title: 'Уровень' },
    { field: 'bookCount', title: 'Количество прочитанных книг' },
    { field: 'links', title: 'Ссылки на книги' }
  ];

  var contentElems = document.getElementsByClassName('content');
  data.people = new PeopleDataContainer(header, contentElems[0]);

  var jsonData =
    '[["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Иван",10,10,["v.gd/a","v.gd/b","v.gd/c","v.gd/d"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Игорь",11,20,["v.gd/a","v.gd/b","v.gd/c"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Станислав",12,30,["v.gd/a","v.gd/b","v.gd/c"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Степан",13,40,["v.gd/a","v.gd/b","v.gd/c"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Глеб",14,50,["v.gd/a","v.gd/b","v.gd/c"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Ульяна",15,60,["v.gd/a","v.gd/b","v.gd/c"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Григорий",16,70,["v.gd/a","v.gd/b","v.gd/c"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Ирина",17,80,["v.gd/a","v.gd/b","v.gd/c"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Татьяна",18,90,["v.gd/a","v.gd/b","v.gd/c"]],\
      ["\/\/upload.wikimedia.org\/wikipedia\/ru\/c\/c9\/Tom_the_Cat.jpg",\
       "Светлана",19,100,["v.gd/a","v.gd/b","v.gd/c"]]]';

  data.people.fillRows(jsonData);
  data.people.createTableFromRows();

  /* ----- tabs ----- */

  var nav = document.getElementsByTagName('nav')[0];
  var h1 = document.getElementsByTagName('h1')[0];

  data.tabs = new TabsContainer([
    'Люди',
    'Книги',
    'Рецензии'
  ], nav, h1, contentElems);

  data.tabs.fillTabs();

}(window, document));
