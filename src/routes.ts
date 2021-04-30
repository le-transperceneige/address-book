import { Router } from 'express'

import * as controller from './controllers'

import { wrapper } from './utils'

const router = Router()

router.route('/nodes')
	.get(wrapper(controller.getAllNodes))
	.post(wrapper(controller.setNode))

router.route('/nodes/:address')
	.get(wrapper(controller.getNode))
	.delete(wrapper(controller.removeAddress))

export default router
