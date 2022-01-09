const express = require('express');
const app = express();


app.use('/static', express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000) 



app.listen(app.get('port'), ()=> console.log('On http://localhost:'+app.get('port')));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/productCar', (req,res)=>{
    res.sendFile(__dirname + '/views/productCar.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/register', (req,res)=>{   
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/panelUsuario', (req,res)=>{   
    res.sendFile(__dirname + '/views/panelUsuario.html');
});

app.get('/about-us', (req,res)=>{   
    res.sendFile(__dirname + '/views/panelUsuario.html');
});
