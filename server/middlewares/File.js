import multer from 'multer';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'images/');
    },
    filename(req, file, cb) {
        cb(null, new Date().toDateString() + '-' + file.originalname);
    },
});

export default storage;
