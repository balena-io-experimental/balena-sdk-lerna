settings = require('../../build/settings')

try
	console.log(JSON.stringify(settings.getAll()))
catch error
	console.error(error.message, error.stack)
	process.exit(1)
