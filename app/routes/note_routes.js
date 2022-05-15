const { ObjectId } = require('mongodb');

module.exports = function(app, db) {
    app.get('/orders/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectId(id) };
		db.collection('orders').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(item);
			}
		});
	});

	app.delete('/orders/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectId(id) };
		db.collection('orders').remove(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send('Note ' + id + ' deleted!');
			}
		});
	});

	app.put('/orders/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectId(id) };
		//const note = { text: req.body.body, title: req.body.title };
		const order = { item: req.body.item, unit_price: req.body.unit_price, qty: req.body.qty, total: req.body.unit_price*req.body.qty};
        db.collection('orders').updateOne({_id: new ObjectId(id)}, {$set: order}, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(item);
			}
		});
	});

	app.post('/orders', (req, res) => {
		// const note = { text: req.body.body, title: req.body.title };
        const order = { item: req.body.item, unit_price: req.body.unit_price, qty: req.body.qty, total: req.body.unit_price*req.body.qty};
		db.collection('orders').insertOne(order, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(result);
			}
		});
	});
};

// const req = require("express/lib/request");
// const res = require("express/lib/response");

// module.exports = function(app, db){
//     app.post('/notes', (req, res) => {
//         // console.log(req.body)
//         // res.send('Hello');
//         const note = { text: req.body.body, title: req.body.title};
//         db.collection('notes').insert(note, (err, result) => {
// 			if (err) {
// 				res.send({ 'error': 'An error has occured' });
// 			} else {
// 				res.send(result.ops[0]);
// 			}
// 		});
//     })
// }