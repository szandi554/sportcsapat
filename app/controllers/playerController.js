import Player from '../models/player.js'

const PlayerController = {
    async index(req, res) {
        try {
            await PlayerController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const players = await Player.findAll()
        res.status(200)
        res.json({
            success: true,
            data: players
        })
    },
    async show(req, res) {
        try {
            await PlayerController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const player = await Player.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: player
        })
    },
    async store(req, res) {
        try {
            await PlayerController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const player = await Player.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: player
        })
    },
    async update(req, res) {
        try {
            await PlayerController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Player.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const player = await Player.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: player
        })
    },
    async destroy(req, res) {
        try {
            await PlayerController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const player = await Player.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: player
        })
    }
}

export default PlayerController
