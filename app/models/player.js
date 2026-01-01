import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Player = sequelize.define('players', {
    name: { type: DataTypes.STRING,  allowNull: false  },
})

export default Player
