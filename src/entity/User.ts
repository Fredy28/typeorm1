import { BaseEntity, CreateDateColumn } from "typeorm";
import {Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm" 

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    ap_paterno: string

    @Column()
    ap_materno: string

    @Column()
    correo_electronico: string

    @Column()
    contrasenia: string

    @Column({
        default: true //agregar
    })
    activo: boolean

    @CreateDateColumn()
    fechaCreado: Date 

    @UpdateDateColumn()
    fechaActualizado: Date
}