const express = require('express');
const app = express();
const path = require("path");


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=> console.log('On http://localhost:'+app.get('port')));
app.use('/static', express.static(__dirname + '/public'));




app.use(require('./routes/main'));
//app.use('/productos',require('./routes/Productos'));
app.use('/miCuenta',require('./routes/miCuenta'));
