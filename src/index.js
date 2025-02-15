const path = require('path');
const express = require('express')
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
app.use(morgan('combined'));
app.engine('hbs', engine({
extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
  res.render('home')
})
console.log(path.join(__dirname, 'resources/views'))

app.listen(port, () => console.log(`http://localhost:3000`))