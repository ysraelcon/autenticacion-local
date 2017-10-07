//environment variables
require('dotenv').config();

var Exp= require('express'),
 bdp= require('body-parser'),
 Ap=Exp(),
 Mrg= require('morgan'),
 Mng= require('mongoose'),
 Fl= require('connect-flash'),
 ckp= require('cookie-parser'),
 Ss= require('express-session'),
 pssp= require('passport');

var config= require('./config/db');
var port= process.env.PORT||3000;

Mng.connect(process.env.DB_URI, {useMongoClient:true});

require('./config/passport')(pssp);

Ap.use(bdp.json());
Ap.use(bdp.urlencoded({extended:true}));
Ap.use(ckp());
Ap.use(Mrg('dev'));
Ap.set('view engine','ejs');
Ap.use(Ss({
 secret:'secreto',
 saveUninitialized:true,
 resave:true
}));
Ap.use(pssp.initialize());
Ap.use(pssp.session());
Ap.use(Fl());
require('./routes/routes')(Ap,pssp);

Ap.listen(port);

