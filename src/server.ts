import app from './app'
import config from './config'

(async () => {
	try {
		require('./redis')

		app.listen(config.port, () => {
			console.log(`Server is running on port ${config.port}`)
		})
		
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
})()
