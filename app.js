const express = require('express');
const app = express();
const path = require("path");


app.use('/static', express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000) 



app.listen(app.get('port'), ()=> console.log('On http://localhost:'+app.get('port')));

app.get("/",(req,res)=> {
    let home = path.join(__dirname + '/views/home.html');
    res.sendFile(home);
})


app.get("/miCuenta",(req,res)=> {
    let miCuenta = path.join(__dirname + '/views/panelUsuario.html');
    res.sendFile(miCuenta);
});

app.get("/login",(req,res)=> {
    let login = path.join(__dirname + '/views/login.html');
    res.sendFile(login);
});

app.get("/register",(req,res)=> {
    let register = path.join(__dirname + '/views/register.html');
    res.sendFile(register);
});

app.get("/nosotros",(req,res)=> {
    let nosotros = path.join(__dirname + '/views/nosotros.html');
    res.sendFile(nosotros);
});

