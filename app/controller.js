var request = require('request')

var onRes = (error, response, body, resolve, reject) => {
	if (error)
		reject(error)
	resolve(body)
}

module.exports = {

	doSomething : () => {
		return new Promise((resolve, reject) => {
			request("http://angular.io", (error, response, body) =>
				onRes(error, response, body, resolve, reject))
		})
	}

}
