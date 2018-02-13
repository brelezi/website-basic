const express = require('express');
const hbs = require('hbs');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({extended: false})); // IMPORTANT - LEARN WHY
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');


// ---------------------FR-SITE------------------------

app.get('/', (req,res)=>{
  res.render('index');
});


app.get('/inscription', (req,res)=>{
  res.render('inscription');
});

app.get('/contact',(req,res)=>{
  res.render('contact');
});

app.post('/confirmation',(req,res)=>{

  mongodb.connect('mongodb://localhost:27017/Subscriber', (err, db)=> {
    if(err){
      return console.log(err);
    }
    db.collection('Subscribers').insertOne({
      nom_field: req.body.nomField,
      prenom_field: req.body.prenomField,
      pseudo_field: req.body.pseudoField,
      dateDeNaissance_field:req.body.dateDeNaissanceField,
      numTelephone_field: req.body.numTelephoneField,
      email_field:req.body.emailField,
      modeDePaiment_field: req.body.modeDePaimentField
    });
  });

  res.render('confirmation',{
    nom_field: req.body.nomField,
    prenom_field: req.body.prenomField,
    pseudo_field: req.body.pseudoField,
    dateDeNaissance_field:req.body.dateDeNaissanceField,
    numTelephone_field: req.body.numTelephoneField,
    email_field:req.body.emailField,
    modeDePaiment_field: req.body.modeDePaimentField
  });




  // ----------------------DISPLAY THE INFO------------------------------------------------


});

app.get('/reglement', (req,res)=>{
  res.render('reglement');
});


// ---------------------EN-SITE------------------------

app.get('/enIndex', (req,res)=>{
  res.render('enIndex');
});


app.get('/enInscription', (req,res)=>{
  res.render('enInscription');
});

app.get('/enContact',(req,res)=>{
  res.render('enContact');
});

app.post('/enConfirmation', (req,res)=>{
  res.render('enConfirmation');
})

app.get('/enReglement', (req,res)=>{
  res.render('enReglement');
});



// ---------------------NL-SITE------------------------

app.get('/nlIndex', (req,res)=>{
  res.render('nlIndex');
});


app.get('/nlInscription', (req,res)=>{
  res.render('nlInscription');
});

app.get('/nlContact',(req,res)=>{
  res.render('nlContact');
});

app.post('/nlConfirmation', (req,res)=>{
  res.render('nlConfirmation');
})

app.get('/nlReglement', (req,res)=>{
  res.render('nlReglement');
});

// {
//     nom_field: req.body.nom_field,
//     prenom_field: req.body.prenom_field,
//     pseudo_field: req.body.pseudo_field,
//     dateDeNaissance_field:req.body.dateDeNaissance_field,
//     numTelephone_field:req.body.numTelephone_field,
//     email_field:req.body.email_field
// }

app.listen(port, ()=>{
  console.log(`Server set up on port ${port}`);
});
