"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('ts-restserver', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false, // Como queremos ver los logs en consola, lo dejo en true
});
exports.default = db;
//# sourceMappingURL=connection.js.map