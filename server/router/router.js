import { Router } from 'express';
import Controller from '../controller/controller.js';
import multer from 'multer';
import storage from '../middlewares/File.js';

const router = Router();
const upload = multer({ storage });

router.post('/add', Controller.addItem).get('/users', Controller.getUsers);

router.get('/positions', Controller.getPositions);

router.post('/users/add', Controller.createUser);
router.post('/users/update', Controller.updateUser);

router.post('/users/files', upload.single('file'), Controller.uploadFile);

router.get('/documents', Controller.getDocuments);

router.get('/images/:filename', Controller.getImages);

router.post('/login', Controller.validateLogin);

export default router;
