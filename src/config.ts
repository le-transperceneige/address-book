require('dotenv').config()

export default {
	port: process.env.PORT || 3000,
	cors: process.env.CORS || '*',
	redis: process.env.REDIS_URL || 'redis://localhost:6379'
}
