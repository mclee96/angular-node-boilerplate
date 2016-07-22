var controller = require('./controller')

var onSuc = (response, res) =>
	res.end(response)

var onErr = (error, res) =>
	res.end(error)

module.exports = (app) => {

	app.get('/doSomething', (req, res) => {
		controller.doSomething()
			.then((response) => onSuc(response, res), (error) => onErr(error, res))
	})

	app.get('*', (req, res) =>
		res.sendFile(__dirname + '/public/index.html')
	)
}
