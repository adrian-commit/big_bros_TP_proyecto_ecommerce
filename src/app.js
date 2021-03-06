const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const method = require('method-override');
const app = express();
const {resolve} = require("path");

//*metodos y adicionales para Apis *//

const productRouterAPI = require('./routes/productApi');
const imgRouterAPI = require('./routes/img');
const userRouterAPI = require('./routes/userApi');



/--- llamado de middlewares---/
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname , './views'));

const listen = () => console.log('listening on port http://localhost:'+app.get('port'));
app.listen(app.get('port'), listen);

/---middlewares---/
app.use('/static', express.static(resolve(__dirname , '../public')));
app.use('/static', express.static(resolve(__dirname , '../uploads')));
app.use(express.urlencoded({extended: true}));
app.use(method("m"));

//** apis */
app.use(express.json());


app.use(session({
    secret: "Shhh, It's a secret", 
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);

/* rutas */

app.use(require('./routes/main'));
app.use('/productos',require('./routes/productos'));
app.use('/users',require('./routes/users'));

//**rutas apis */
app.use('/api/products', productRouterAPI);
app.use('/api/users', userRouterAPI);
app.use('/api/img', imgRouterAPI);

module.exports = app;