import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Empleado extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User)
    @JoinColumn()
    usuario: User

    @Column()
    nombre: string

    @Column()
    ap_paterno: string

    @Column()
    ap_materno: string

    @Column()
    telefono: string

    @CreateDateColumn()
    fechaCreado: Date 

    @UpdateDateColumn()
    fechaActualizado: Date
}