const express = require('express');
const hbs = require('hbs');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');


var app = express();
const port = process.env.PORT || 3000;
// const MONGO_URL = 'mongodb://malcolm:fifirstdbpassword@ds237848.mlab.com:37848/subscription';
const MONGO_URL = 'mongodb://malcolm:fifirstdbpassword@ds237858.mlab.com:37858/socka';

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

  setTimeout(()=>{
    MongoClient.connect(MONGO_URL, (err, db) => {
      if (err) {
        return console.log(err);
      }
      // Do something with db here, like inserting a record
      db.collection('subscriptions').insertOne(
        {
          nom_field: req.body.nomField,
          prenom_field: req.body.prenomField,
          pseudo_field: req.body.pseudoField,
          dateDeNaissance_field:req.body.dateDeNaissanceField,
          numTelephone_field: req.body.numTelephoneField,
          email_field:req.body.emailField,
          modeDePaiment_field: req.body.modeDePaimentField,
          language: "FR"
        },
        function (err, res) {
          if (err) {
            db.close();
            return console.log(err);
          }
          // Success
          db.close();
        }
      )
    });
  }, 3000);


  res.render('confirmation',{
    nom_field: req.body.nomField,
    prenom_field: req.body.prenomField,
    pseudo_field: req.body.pseudoField,
    dateDeNaissance_field:req.body.dateDeNaissanceField,
    numTelephone_field: req.body.numTelephoneField,
    email_field:req.body.emailField,
    modeDePaiment_field: req.body.modeDePaimentField
  });


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




app.post('/enConfirmation',(req,res)=>{

  setTimeout(()=>{
    MongoClient.connect(MONGO_URL, (err, db) => {
      if (err) {
        return console.log(err);
      }
      // Do something with db here, like inserting a record
      db.collection('subscriptions').insertOne(
        {
          nom_field: req.body.nomField,
          prenom_field: req.body.prenomField,
          pseudo_field: req.body.pseudoField,
          dateDeNaissance_field:req.body.dateDeNaissanceField,
          numTelephone_field: req.body.numTelephoneField,
          email_field:req.body.emailField,
          modeDePaiment_field: req.body.modeDePaimentField,
          language: "EN"
        },
        function (err, res) {
          if (err) {
            db.close();
            return console.log(err);
          }
          // Success
          db.close();
        }
      )
    });
  }, 3000);


  res.render('enConfirmation',{
    nom_field: req.body.nomField,
    prenom_field: req.body.prenomField,
    pseudo_field: req.body.pseudoField,
    dateDeNaissance_field:req.body.dateDeNaissanceField,
    numTelephone_field: req.body.numTelephoneField,
    email_field:req.body.emailField,
    modeDePaiment_field: req.body.modeDePaimentField
  });


});


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





app.post('/nlConfirmation',(req,res)=>{

  setTimeout(()=>{
    MongoClient.connect(MONGO_URL, (err, db) => {
      if (err) {
        return console.log(err);
      }
      // Do something with db here, like inserting a record
      db.collection('subscriptions').insertOne(
        {
          nom_field: req.body.nomField,
          prenom_field: req.body.prenomField,
          pseudo_field: req.body.pseudoField,
          dateDeNaissance_field:req.body.dateDeNaissanceField,
          numTelephone_field: req.body.numTelephoneField,
          email_field:req.body.emailField,
          modeDePaiment_field: req.body.modeDePaimentField,
          language: "NL"
        },
        function (err, res) {
          if (err) {
            db.close();
            return console.log(err);
          }
          // Success
          db.close();
        }
      )
    });
  }, 3000);


  res.render('nlConfirmation',{
    nom_field: req.body.nomField,
    prenom_field: req.body.prenomField,
    pseudo_field: req.body.pseudoField,
    dateDeNaissance_field:req.body.dateDeNaissanceField,
    numTelephone_field: req.body.numTelephoneField,
    email_field:req.body.emailField,
    modeDePaiment_field: req.body.modeDePaimentField
  });


});


app.get('/nlReglement', (req,res)=>{
  res.render('nlReglement');
});



app.listen(port, ()=>{
  console.log(`Server set up on port ${port}`);
});
