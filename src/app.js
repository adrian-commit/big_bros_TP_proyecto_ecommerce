const express = require('express');
const app = express();
const path = require("path");


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , '/views'));

app.listen(app.get('port'), ()=> console.log('On http://localhost:'+app.get('port')));

app.use('/static', express.static(path.join(__dirname , '../public')));

app.use(require('./routes/main'));
app.use('/productos',require('./routes/productos'));
app.use('/miCuenta',require('./routes/miCuenta'));

