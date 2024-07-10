import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class db_masyarakat {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  TTL: string;

  @Column({ length: 10 })
  JenisKelamin: string;

  @Column({ length: 200 })
  alamat: string;

  @Column()
  RT: number;

  @Column()
  RW: number;

  @Column({ length: 100 })
  Desa: string;

  @Column({ length: 100 })
  Kecamatan: string;

  @Column({ length: 50 })
  Agama: string;

  @Column({ length: 50 })
  StatusKawin: string;

  @Column({ length: 100 })
  Pekerjaan: string;

  @Column({ length: 50 })
  Kewarganegaraan: string;

  @Column()
  Berlakuhingga: string;
}
