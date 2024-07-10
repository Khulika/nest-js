import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db_masyarakat } from './entities/user.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([db_masyarakat]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
