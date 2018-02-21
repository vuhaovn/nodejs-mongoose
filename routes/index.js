var express = require('express');
var router = express.Router();

var Task = require('../models/task');

router.get('/', (req, res) => {
	Task.find({}, (err, tasks) => {
		if (err) {
			console.log(err);
		} else {
			res.render('index', {title: 'Knowledgebase', tasks: tasks});
		}
	})
});

router.get('/add', (req, res) => {
	res.render('add', {title: 'Add task'});
});

router.post('/add', (req, res) => {
	let task = new Task({
		title: req.body.title,
		isDone: false
	});
	task.save((err) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/');
		}
	});
});

router.get('/task/:id', (req, res) => {
	let id = req.params.id;
	Task.findById(id, (err, task) => {
		if (err) {
			console.log(err);
		} else {
			res.render('task', {task: task});
		}
	})
});

router.get('/edit/:id', (req, res) => {
	let id = req.params.id;
	Task.findById(id, (err, task) => {
		if (err) {
			console.log(err);
		} else {
			res.render('edit', {title: 'Edit task', task: task});
		}
	})
});

router.post('/edit/:id', (req, res) => {
	let query = {
		_id: req.params.id
	}
	Task.update(query, {$set: {title: req.body.title}}, (err) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/');
		}
	});
});

router.delete('/task/:id', (req, res) => {
	Task.remove({_id: req.params.id}, (err) => {
		if (err) {
			console.log(err);
		}
	});
})

module.exports = router;