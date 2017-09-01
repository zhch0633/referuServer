var express = require('express');
var app = express();
var dbObj = require('./src/dbinit.js');
var userRouter = require('./src/router/user.js')
var referRouter = require('./src/router/refer.js')
var session = require('express-session');

const { Nuxt, Builder } = require('nuxt')

let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

//add vue front end 
let nuxt = new Nuxt(config)
if (config.dev) {
  new Builder(nuxt).build()
}

app.set('port', (process.env.PORT || 5000));
app.use(session({
    secret: 'session secret',
    cookie: {}
}));
app.use(express.static(__dirname + '/public'));
app.use('/user',userRouter);
app.use('/refer',referRouter);
app.use(nuxt.render)  

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


