import redisClient from '../redis'

export const getAllNodes = async() => {
	return await redisClient.hgetall('nodes')
}

export const getNode = async (address: string) => {
	return redisClient.hget('nodes', address)
}

export const setNode = async ({ address, key }: { address: string, key: string }) => {
	return redisClient.hset('nodes', address, key)
}


export const deleteNode = async (address: string) => {
	return redisClient.del(`nodes:${address}`)
}
