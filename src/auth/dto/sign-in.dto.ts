import { IsNotEmpty } from 'class-validator';

export class SignInDto {
    @IsNotEmpty()
    username;

    @IsNotEmpty()
    password;
}