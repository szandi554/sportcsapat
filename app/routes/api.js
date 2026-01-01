import Router from 'express'
const router = Router()


import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';

import TeamController from '../controllers/teamController.js';
import PlayerController from '../controllers/playerController.js';

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)

router.get('/teams', TeamController.index)
router.get('/teams/:id', TeamController.show)
router.post('/teams', TeamController.store)
router.put('/teams/:id', TeamController.update)
router.delete('/teams/:id', TeamController.destroy)

router.get('/players', PlayerController.index)
router.get('/players/:id', PlayerController.show)
router.post('/players',PlayerController.store)
router.put('/players/:id', PlayerController.update)
router.delete('/players/:id', PlayerController.destroy)

export default router
