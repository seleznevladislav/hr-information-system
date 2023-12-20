import Service from '../service/service.js';

const addItem = async (req, res, next) => {
	const Item = {
		name: req.body.name,
		description: req.body.description,
		figure: req.body.figure,
	};
	const Photo = {
		name: req.file.originalname,
		SRC: req.file.path,
		size: req.file.size,
	}
	try {
			const dataItem = await Service.addItem(Item)
			const dataPhoto = await Service.addPhoto(Photo);
			res.send(`<h1>Данные успешно отправлены</h1><a href='/products.html'>Вернуться на страницу с продуктами</a>`);
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}
 
const getUsers = async (req, res, next) => {
	try {
			const data = await Service.getUsers()
			res.send(data)

			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

const getPositions = async (req, res, next) => {
	try {
		const data = await Service.getPositions()
		res.send(data)

		next();
	} catch (error) {
		console.error(e);
		res.sendStatus(500);
	}
}

const createUser = async (req, res, next) => {
	try {
		const data = await Service.createUser(req)
		console.log(data)
		res.send(data)

		next();
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}

const uploadFile = async (req, res, next) => {
	try {
		await Service.uploadFile(req);
		res.sendStatus(200);
		next();
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}

const getDocuments = async (req, res, next) => {
	try {
		const data = await Service.getDocuments(req);
		res.send(data)
		next();
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}

const getImages = async (req, res, next) => {
	try {
		console.log(req)
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}

const updateUser = async (req, res, next) => {
	try {
		const data = await Service.updateUser(req);
		res.send(data)
		next();
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}

export default {
	addItem,
	getUsers, 
	getPositions,
	createUser,
	uploadFile,
	getDocuments,
	getImages,
	updateUser,
}
