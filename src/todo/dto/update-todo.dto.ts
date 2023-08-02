import { IsNotEmpty } from 'class-validator';

export class UpdateTodoDto {
    @IsNotEmpty()
    id;

    @IsNotEmpty()
    todo;
}