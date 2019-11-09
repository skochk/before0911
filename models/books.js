const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
  title: String,
  authors: [{ type: Schema.Types.ObjectId, ref: 'Authors' }]
});



const Books = mongoose.model('Books', bookSchema);
module.exports = Books;