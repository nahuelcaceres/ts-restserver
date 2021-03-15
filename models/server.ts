import express from 'express';
import rutasUsuarios from '../routes/usuario';
import cors from 'cors'

import db from '../db/connection';

class Server {

    private app: express.Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        // Definir middlewares
        this.middlewares();

        // Definir rutas
        this.rotues();
    }
    
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (err) {
            throw new Error(err); 
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta publica
        this.app.use( express.static('public') );
    };

    rotues() {
        this.app.use(this.apiPaths.usuarios, rutasUsuarios )
    };

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;