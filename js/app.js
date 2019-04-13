'use strict';

function Animal(animal) {
  for (let key in animal) {
    this[key] = animal[key];
  }
}

Animal.allAnimals = [];
Animal.keywords = [];

Animal.prototype.toHtml = function () {
  let $template = $('#animal-template').html();
  let compiledTemplate = Handlebars.compile($template);
  return compiledTemplate(this);
};

Animal.readJson = () => {
  $.get('data/page-1.json', 'json')
    .then(data => {
      data.forEach(item => {
        Animal.allAnimals.push(new Animal(item));
      });
    })
    .then(populateKeywords)
    .then(sortKeywords)
    .then(Animal.loadAnimals)
    .then(Animal.loadKeyword);
};

function populateKeywords() {
  Animal.allAnimals.forEach(animal => {
    if (!Animal.keywords.includes(animal.keyword)) {
      Animal.keywords.push(animal.keyword)
    }
  })
}

function sortKeywords() {
  Animal.keywords.sort()
}

Animal.loadAnimals = () => {
  Animal.allAnimals.forEach(animal => {
    $('#animals').append(animal.toHtml())
  });
};

$(() => Animal.readJson());

Animal.loadKeyword = () => {
  Animal.keywords.forEach((keyword) => {
    $('#filter').append(`<option value="${keyword}">${keyword}</option>`);
  })
};

Animal.filterKeyword = () => {
  $('#filter').on('change', function () {
    let $selection = $(this).val();
    $('div').hide();
    $(`div[class="${$selection}"]`).show();
  });
}
