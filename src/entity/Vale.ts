import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Vale extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nim_serie: string

    @Column()
    unidad: string

    @Column()
    modelo: string

    @Column()
    marca: string

    @CreateDateColumn()
    fechaCreado: Date 

    @UpdateDateColumn()
    fechaActualizado: Date
}