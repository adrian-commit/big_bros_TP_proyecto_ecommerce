const multer = require('multer');
const path = require('path');

module.exports = folder => multer.diskStorage ({ 
    destination:(req, file, cb) => cb(null, path.resolve(__dirname, '../../uploads', folder)),
    filename:(req, file, cb) => cb(null, file.fieldname +'-'+ Date.now() +'-'+ path.extname(file.originalname))
})
