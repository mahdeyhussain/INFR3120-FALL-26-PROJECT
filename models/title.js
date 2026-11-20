const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defines what every title document looks like in MongoDB
const TitleSchema = new Schema({
  title: String,        // e.g. "Dune: Part Two"
  type: String,         // "Movie" or "Series"
  genre: String,        // e.g. "Action", "Sci-Fi"
  platform: String,     // where to watch, e.g. "Netflix", "Crave"
  year: Number,
  rating: Number,       // out of 10
  description: String
});

// Mongoose stores 'Title' documents in a collection called 'titles'
module.exports = mongoose.model('Title', TitleSchema);