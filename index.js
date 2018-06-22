const express = require('express');
const methodOverride = require('method-override');
const parser = require('body-parser');
// const mainController = require('./controllers/main');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// app.use('/', mainController);

app.listen(3000, () => {
  console.log('running on localhost:3000');
});
