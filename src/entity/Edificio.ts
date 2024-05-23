import { Area } from './Area';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Edificio extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => Area, (area) => area)
    area: Area[]

    @Column()
    nombre: string

    @Column()
    planta: string

    @Column()
    descripcion: string

    @CreateDateColumn()
    fechaCreado: Date 

    @UpdateDateColumn()
    fechaActualizado: Date
}