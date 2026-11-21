var express = require('express');
var router = express.Router();
const Title = require('../models/title');

/* GET home page: load all titles from MongoDB and send them to the view */
router.get('/', async function(req, res, next) {
  try {
    const titles = await Title.find({});   // get every title
    res.render('index', { title: 'CineScout', titles: titles });
  } catch (err) {
    next(err);   // show the error page if the database query fails
  }
});

router.get('/movies/add', function(req, res) {
  res.render('addMovie', { title: 'Add Movie - CineScout' });
});
router.post('/movies/add', async function(req, res, next) {
  try {
    const newMovie = new Title({
      title: req.body.title,
      type: 'Movie',
      genre: req.body.genre,
      platform: req.body.platform,
      year: req.body.year,
      rating: req.body.rating
    });

    await newMovie.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});
module.exports = router;