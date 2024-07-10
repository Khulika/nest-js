import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { accounts } from '../accounts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(accounts)
        private userRepository : Repository<accounts>,
    ){}

    async findByEmail(email: string): Promise<accounts>{

        return await this.userRepository.findOne({
            where :{
                email: email,
            }
        });
    }

    async findById(id: number): Promise<accounts>{
        return await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
    }

    async create(user:  accounts): Promise<accounts>{

    return await this.userRepository.save(user);
    }
        
}
