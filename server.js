const express = require('express');
const app = express();
const hbs = require('hbs');
 
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
require('./hbs/helpers');

app.get('/', (req, res) => {

  res.render('home',{

    nombre: 'miguel fretes',
    anio: new Date().getFullYear()

  });

});

app.get('/about', (req, res) => {

    res.render('about',{
  
        nombre: 'm1nkell'
  
    });
  
  });


app.listen(port, () => {

    console.log(`Escuchando el puerto 3000.`);

}); 