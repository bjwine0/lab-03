'use strict';

function Animal(animal) {
  for (let key in animal) {
    console.log('key', key);
    this[key]= animal[key];
    if (!(Animal.noDuplicate.indexOf(animal.keyword) + 1)) {
      Animal.noDuplicate.push(animal.keyword);
    }
  }
}

Animal.noDuplicate = [];
Animal.allAnimals = [];
let zip = [];
// let zipTwo = [];

Animal.prototype.toHtml = function () {
  let $template = $('#animal-template').html();
  console.log('source', $template);
  let compiledTemplate = Handlebars.compile($template);
  console.log(compiledTemplate(this));
  return compiledTemplate(this);
};

// let path = 'data/page-1.json';

Animal.readJson = () => {
  // $('a').on('click', function () {
  //   debugger;
  //   let $whereToGo = $(this).val('path');
    
  //   debugger;
  //   console.log('$wheretogo', $whereToGo);
  //   debugger;
    
    
  //   $('.tab-content').hide();
  //   debugger;
  //   // $('#' + $whereToGo).fadeIn(1000);
  //   debugger;
    // $.get( $whereToGo, 'json')
    $.get('data/page-1.json')
      // console.log($whereToGo)
      .then(data => {
        console.log(data);
        data.forEach(object => {
          zip.push(new Animal(object));
          console.log('zip', zip);
        });
      })
      .then(Animal.loadKeyword)
      .then(Animal.loadTemplate);
  // });
};
$(() => Animal.readJson());


Animal.loadKeyword = () => {
  Animal.noDuplicate.forEach((keyword) => {
    $('select').append(`<option value="${keyword}">${keyword}</option>`);
  });
};

Animal.loadTemplate = () => {
  zip.forEach(newAnimalObject => {
    $('#photo-template').append(newAnimalObject.toHtml());
    console.log('newAnimal', newAnimalObject);
  });
}

$('select').on('change', function () {
  let $selection = $(this).val();
  $('div').hide();
  $(`div[class="${$selection}"]`).show();
});

// $('a').on('click', function () {
//   debugger;
//   let $whereToGo = $(this).data('tab');
//   debugger;
//   console.log('$wheretogo', $whereToGo);
//   debugger;
//   $('.tab-content').hide();
//   debugger;
//   $('#' + $whereToGo).fadeIn(1000);
// });
