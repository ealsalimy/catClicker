/* Model */
var model = {
  currentCat: null,
  cats: [
    {
      clicks: 0,
      name:'kitty',
      imgLink:'https://www.sonomamag.com/wp-content/uploads/2018/05/shutterstock_352176329.jpg'
    },
    {
      clicks: 0,
      name: 'Tom',
      imgLink:'https://i.pinimg.com/originals/ba/03/23/ba03237a6d6499f0e2633314826e1526.jpg'
    },
    {
      clicks: 0,
      name:'Fluffy',
      imgLink:'http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg'
    },
    {
      clicks: 0,
      name: 'The Cat',
      imgLink: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Scottish-Fold_01.jpg'
    },
    {
      clicks: 0,
      name: 'Lilly',
      imgLink: 'https://www.animalactivistwatch.com/wp-content/uploads/2018/03/shutterstock_352176329.jpg'
    }
  ]
};

/* Octopus */
var octopus = {
  init: function() {
    // Current cat initially is the first one in the list
    model.currentCat = model.cats[0];
    //initialize cat Views
    catListView.init();
    catView.init();

  },
  getCurrentCat: function() {
    return model.currentCat;
  },
  getCats: function() {
    return model.cats;
  },
  //Set the selected cat to the object passed in
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },
  // Increment the clicks counter for the current cat
  incrementCounter: function() {
    model.currentCat.clicks++;
    catView.render();
  }
};

/* Views */
var catView = {
  init: function() {
    // store pointers to DOM elements
    this.catBoxElem = document.getElementById('cat_box');
    this.catNameElem = document.getElementById('cat_name');
    this.catImgElem = document.getElementById('cat_img');
    this.catClicksElem = document.getElementById('clicks');
    //Add eventListnere to increment counter for number of clicks on the cat image
    this.catImgElem.addEventListener('click', function(){
      octopus.incrementCounter();
    });
  },

  render: function() {
    //update the DOM elements with the values of the current cat
    var currentCat = octopus.getCurrentCat();
    this.catNameElem.textContent = currentCat.name;
    this.catClicksElem.textContent = currentCat.clicks;
    this.catImgElem.src = currentCat.imgLink;
  }
};

var catListView = {
  init: function() {
    // store the DOM elements
    this.catListElem = document.getElementById('cat_list');
    // update DOM element with the cats values that we get from the render function
    this.render();
  },
  render: function() {
    // Get cats values from octopus
    var cats = octopus.getCats();
    this.catListElem.innerHTML='';
    var cat, elem, i;
    //Loop over cats cat_list
    for (var i = 0; i < cats.length; i++) {
      cat = cats[i];
    // create new cat item
    elem = document.createElement('li');
    elem.textContent = cat.name;
    //Set current cat and render CatView
    elem.addEventListener('click', (function(catCopy){
      return function() {
        octopus.setCurrentCat(catCopy);
        catView.render();
      };
    })(cat));
    //Add the element to the list
    this.catListElem.append(elem);
    }
  }

};

octopus.init();
