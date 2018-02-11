const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');



app.get('/', (req,res)=>{
  res.render('index');
});


app.get('/inscription', (req,res)=>{
  res.render('inscription');
});

app.get('/contact',(req,res)=>{
  res.render('contact');
});

app.post('/confirmation', (req,res)=>{
  res.render('confirmation');
})

// {    
//     nom_field: req.body.nom_field,
//     prenom_field: req.body.prenom_field,
//     pseudo_field: req.body.pseudo_field,
//     dateDeNaissance_field:req.body.dateDeNaissance_field,
//     numTelephone_field:req.body.numTelephone_field,
//     email_field:req.body.email_field
// }

app.listen(3000, ()=>{
  console.log('Server set up on port 3000');
});
