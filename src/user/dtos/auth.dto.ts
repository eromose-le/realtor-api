import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";



export class SignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Matches(/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
    message: 'phone must be a valid number.',
  })
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  password: string;
}