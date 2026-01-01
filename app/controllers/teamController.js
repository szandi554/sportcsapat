import Team from '../models/team.js'

const TeamController = {
    async index(req, res) {
        try {
            await TeamController.tryIndex(req, res)
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
        const teams = await Team.findAll()
        res.status(200)
        res.json({
            success: true,
            data: teams
        })
    },
    async show(req, res) {
        try {
            await TeamController.tryShow(req, res)
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
        const team = await Team.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: team
        })
    },
    async store(req, res) {
        try {
            await TeamController.tryStore(req, res)
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
        const team = await Team.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: team
        })
    },
    async update(req, res) {
        try {
            await TeamController.tryUpdate(req, res)
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
        const recordNumber = await Team.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const team = await Team.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: team
        })
    },
    async destroy(req, res) {
        try {
            await TeamController.tryDestroy(req, res)
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
        const team = await Team.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: team
        })
    }
}

export default TeamController
