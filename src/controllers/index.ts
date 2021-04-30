import { Request, Response} from 'express'

import * as service from '../services'

export const getAllNodes = async(_req: Request, res: Response) => {
	const nodes = await service.getAllNodes()

	return res.status(200).json(nodes)
}

export const getNode = async (req: Request, res: Response) => {
	const pubKey = await service.getNode(req.params.address) 

	return res.status(200).json({ address: req.params.address, key: pubKey })
}

export const setNode = async(req: Request, res: Response) => {
	await service.setNode(req.body)

	return res.status(201).end()
}

export const removeAddress = async (req: Request, res: Response) => {
	await service.deleteNode(req.params.address)

	return res.status(204).end()
}

