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

  var jsonData = '[["Иван",10,10,["v.gd/a","v.gd/b","v.gd/c","v.gd/d"]],\
                   ["Игорь",11,20,["v.gd/a","v.gd/b","v.gd/c"]],\
                   ["Станислав",12,30,["v.gd/a","v.gd/b","v.gd/c"]],\
                   ["Степан",13,40,["v.gd/a","v.gd/b","v.gd/c"]],\
                   ["Глеб",14,50,["v.gd/a","v.gd/b","v.gd/c"]],\
                   ["Ульяна",15,60,["v.gd/a","v.gd/b","v.gd/c"]],\
                   ["Григорий",16,70,["v.gd/a","v.gd/b","v.gd/c"]],\
                   ["Ирина",17,80,["v.gd/a","v.gd/b","v.gd/c"]],\
                   ["Татьяна",18,90,["v.gd/a","v.gd/b","v.gd/c"]],\
                   ["Светлана",19,100,["v.gd/a","v.gd/b","v.gd/c"]]]';

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
