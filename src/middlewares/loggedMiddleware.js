 function loggedMiddleware (req, res, next) {
        if (req.session.userlogged == undefined){
            next();
        } else {
            return res.send('esta pagina es solo para invitados');
        }
        };

module.exports = loggedMiddleware;

