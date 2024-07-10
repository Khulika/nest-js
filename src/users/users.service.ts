import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { db_masyarakat } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(db_masyarakat)
    private usersRepository: Repository<db_masyarakat>,
  ) {}

  async  create(createUserDto: CreateUserDto): Promise<db_masyarakat> {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

 async findAll(): Promise<db_masyarakat[]> {
    return await this.usersRepository.find();
  }

 async findOne(id: number): Promise<db_masyarakat> {
    return await this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<db_masyarakat> {
    await this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
