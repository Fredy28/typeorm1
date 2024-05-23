import { Empleado } from './Empleado';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
//import { Vale } from "./Vale";

@Entity()
export class Area extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Empleado)
    /*@JoinColumn()
    emp: Empleado*/

    @Column()
    nombre: string

    @Column()
    descripcion: string

    @CreateDateColumn()
    fechaCreado: Date 

    @UpdateDateColumn()
    fechaActualizado: Date
}