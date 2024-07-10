import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { accounts } from './accounts.entity';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
    imports : [TypeOrmModule.forFeature([accounts]),
    JwtModule.register({
        secretOrPrivateKey: 'secret'
    })

],
    providers: [UserService, AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
