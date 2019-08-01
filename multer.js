const multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/picture')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname )
    }
});
module.exports = multer({storage});