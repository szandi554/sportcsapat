/*
* File: teams.js
* Author: Siegenthaler Alexandra 
* Copyright: 2026, Siegenthaler Alexandra 
* Group: Szoft II/2/E
* Date: 2026-01-01
* Github: Siegenthaler Alexandra
* Licenc: MIT
*/

import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Team = sequelize.define('teams', {
    name: { type: DataTypes.STRING,  allowNull: false  },

})

export default Team
