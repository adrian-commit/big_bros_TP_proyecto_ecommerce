function loggedMiddleware (req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('panelUsuario');
    } else {
        next();
    }
    }

module.exports = loggedMiddleware;

