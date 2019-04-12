'use strict';
// debugger;

let animals = [];



function Animal(animal) {
  for (let key in animal) {
    console.log('key', key);
    this[key] = animal[key];
  }
}


//   if (!(Animal.noDuplicate.indexOf(animal.keyword) + 1)) {
//     Animal.noDuplicate.push(animal.keyword);
//   }

// }


// Animal.noDuplicate = [];
// console.log('nodup', Animal.noDuplicate);
// Animal.allAnimals = [];
// console.log('animal.allaniml', Animal.allAnimals);

Animal.prototype.toHtml = function () {
  let $template = $('#animal-template').html();
  console.log('src', $template);
  let compiledTemplate = Handlebars.compile($template);
  console.log(compiledTemplate(this));
  return compiledTemplate(this);
}


//   $('main').append('<div class="dupe"></div>');
//   let animalDupe = $('div[class="dupe"]');

//   let animalHtml = $('#photo-template').html();

//   animalDupe.html(animalHtml);

//   animalDupe.find('h2').text(this.title);
//   animalDupe.find('img').attr('src', this.image_url);
//   animalDupe.find('#description').text(this.description);
//   animalDupe.find('#keyword').text(this.keyword);
//   animalDupe.find('#horns').text(this.horns);
//   animalDupe.removeClass('dupe');
//   animalDupe.attr('class', this.keyword);
// };

// Animal.readJson = () => {
//   $.get('data/page-1.json', 'json')
//     .then(data => {
//       data.forEach(item => {
//         Animal.allAnimals.push(new Animal(item));
//       });
//     })
//     .then(Animal.loadAnimals)
//     .then(Animal.loadKeyword);
// };


$.get('data/page-1.json', 'json').forEach(animalObject => {
  animals.push(new Animal(animalObject));
});

animals.forEach(newAnimalObject => {
  $('#animals').append(ourNewNeighborhoodObject.toHtml());
 
});



Animal.loadAnimals = () => {
  console.log('load animals');
  Animal.allAnimals.forEach(animal => animal.render());
};

$(() => Animal.readJson());

Animal.loadKeyword = () => {
  // debugger;
  Animal.noDuplicate.forEach((keyword) => {
    $('select').append(`<option value="${keyword}">${keyword}</option>`);
  });

};


$('select').on('change', function () {
  let $selection = $(this).val();
  $('div').hide();
  $(`div[class="${$selection}"]`).show();
});


