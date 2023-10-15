const express = require('express')
const exphbs = require('express-handlebars');
const path = require('path');
const app = express()
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('home',{ layout: false })
})

app.get('/about', (req, res) => {
    res.render('about',{ layout: false })
})
app.get('/projects', (req, res) => {
    res.render('projects',{ layout: false })
})

app.get('/contacts', (req, res) => {
    res.render('contacts',{ layout: false })
})
app.listen(3000);
