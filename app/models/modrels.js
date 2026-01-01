// import sequelize from '../database/database.js'
import User from './user.js';

const db = {};

db.User = User;

// await sequelize.sync({ alter: true })

export default db;
