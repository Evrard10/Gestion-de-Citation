const express = require('express');
const app = express();
var bodyParser = require('body-parser')

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bb@0770560063',
  database: 'gestioncitation'
})
var urlencodedParser = bodyParser.urlencoded({ extended: false })

connection.connect(function(erreur) {
if(erreur){
    console.log("erreur de connexion")
}    
console.log("Connexion établie")
})

app.set('view engine', 'ejs');

app.get('/index',function(req, res){
    
    res.render('index');
})
app.post('/index',urlencodedParser ,function(req, res){
    console.log('welcome, ' + req.body.author)

    connection.query("INSERT INTO citations (texte, source) VALUES ('citation texte 1', 'larousse')", function(err, rows, fields){
        if (err) throw err
      
        console.log('Insertion faite')
    })
        
        res.render('index');
})

app.get('/citation',function(req, res){
    res.render('citation'); 
})

app.get('/ajouter',function(req, res){
    res.render('ajoutercitation');
})

app.listen(8080, function(){
    console.log("Mon serveur écoute sur le port 8080");
})