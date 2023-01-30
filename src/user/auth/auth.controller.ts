import { generateProductKeyDto, SigninDto, SignupDto } from './../dtos/auth.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }

  @Post('signin')
  signin(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }

  @Post('key')
  generateProductKey(@Body() {userType, email}: generateProductKeyDto) {
    return this.authService.generateProductKey(email, userType);
  }
}
