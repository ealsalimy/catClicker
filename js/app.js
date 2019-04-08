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
var octupus = {
  init: function() {
    // Current cat initially is the first one in the list
    model.currentCat = model.cats[0];

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
  }
};

/* Views */
var catView = {

};

var catListView() = {

};
