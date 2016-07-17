//Microsoft

//  Dropdown section

document.querySelector('.store').addEventListener('click', function () {
  document.querySelector('.products').classList.remove('active');
  document.querySelector('.store').classList.toggle('active');
});

document.querySelector('.products').addEventListener('click', function () {
  document.querySelector('.store').classList.remove('active');
  document.querySelector('.products').classList.toggle('active');
  var exper = document.querySelector('.products').classList.item(0);
});

//  Tab list on hover

var list = document.querySelectorAll('.tab');
[].forEach.call(list, function (elem) {
  elem.addEventListener('mouseover', function () {
    var elemID = '#' + elem.id + ' .tablist';
    elem.classList.add('hovered');
  });
  elem.addEventListener('mouseout', function () {
    var elemID = '#' + elem.id + ' .tablist';
    elem.classList.remove('hovered');
  });
});

//  Toogle menu

document.querySelector('.menu-toogle button').addEventListener('click', function () {
  document.querySelector('.menu-toogle').classList.toggle('opened');
  document.querySelector('.header-list').classList.toggle('opened');
});

// End Microsoft

// Apple menu

var columns = document.querySelectorAll('footer .top .column .column-content');
[].forEach.call(columns, function (column) {
  column.addEventListener('click', function () {
    var columnID = '#' + column.id;
    column.classList.toggle('opened');
  });
});
