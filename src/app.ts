import express, { Request, Response, NextFunction} from 'express'
import cors from 'cors'

import router from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api',  router)

app.use(async (_req: Request, res: Response, _next: NextFunction) => {
	return res.status(404).end()
})

app.use(async (err: Error, _req: Request, res: Response, _next: NextFunction) => {
	return res.status(500).json({
		detail: err.message
	})
})

export default app
