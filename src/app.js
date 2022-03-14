const express = require('express');
const method = require('method-override');
const app = express();
const {resolve} = require("path");


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname , './views'));

const listen = () => console.log('listening on port http://localhost:'+app.get('port'));
app.listen(app.get('port'), listen);

app.use('/static', express.static(resolve(__dirname , '../public')));
app.use('/static', express.static(resolve(__dirname , '../uploads')));
app.use(express.urlencoded({extended: true}));
app.use(method("m"));


/* rutas */

app.use(require('./routes/main'));
app.use('/productos',require('./routes/productos'));
app.use('/miCuenta',require('./routes/miCuenta'));

