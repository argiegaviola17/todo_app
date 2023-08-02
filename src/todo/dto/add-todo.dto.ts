import { IsNotEmpty } from 'class-validator';

export class AddTodoDto {
    @IsNotEmpty()
    todo;
}