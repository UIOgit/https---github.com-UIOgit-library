const multer = require('multer');

const storage = multer.diskStorage
(
    {
        destination(request, file, callback)
        {
            callback(null, 'public/library/books');
        },
        filename(request, file, callback)
        {
            callback(null, file.originalname);
        }
    }
)

module.exports = multer(storage);