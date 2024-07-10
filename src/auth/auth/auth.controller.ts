import { Controller, Post, Body } from  '@nestjs/common';
import { AuthService } from  './auth.service';
import { accounts } from  '../accounts.entity';

@Controller('auth')
export class AuthController {

    constructor(private  readonly  authService:  AuthService) {}

    @Post('login')
    async login(@Body() user: accounts): Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: accounts): Promise<any> {
      return this.authService.register(user);
    }  
}



