function adminMiddleware (req, res, next) {
console.log(res.locals);
next;
}
   

module.exports = adminMiddleware;