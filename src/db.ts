import { DataSource } from "typeorm";
import {User} from '../src/entity/User';
import { Empleado } from "./entity/Empleado";
import { Area } from "./entity/Area";
import { Edificio } from "./entity/Edificio";
import { Vale } from "./entity/Vale";

/*export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'administrador',
    password: 'administrador',
    port: 5433,
    database: 'db_sice',
    entities: [User, Empleado, Area, Edificio, Vale],
    logging: true,
    synchronize: true //lee las entidades y vuelve a crear
})*/

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'roundhouse.proxy.rlwy.net',
    username: 'postgres',
    password: 'rMrOCTQpRQhGvkCCYmBQMoODFitgxlbH',
    port: 59808,
    database: 'railway',
    entities: [User, Empleado, Area, Edificio, Vale],
    logging: true,
    synchronize: true //lee las entidades y vuelve a crear
})