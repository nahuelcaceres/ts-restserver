import { Sequelize } from 'sequelize';

const db = new Sequelize('ts-restserver', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false, // Como queremos ver los logs en consola, lo dejo en true
});

export default db;