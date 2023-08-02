/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

import { AddTodoDto } from './dto/add-todo.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    getOneTodo(id: any) {
        throw new Error('Method not implemented.');
    }
    getAllTodos() {
        throw new Error('Method not implemented.');
    }
    delete(params: DeleteTodoDto) {
        throw new Error('Method not implemented.');
    }
    update(params: UpdateTodoDto) {
        throw new Error('Method not implemented.');
    }
    add(params: AddTodoDto) {
        throw new Error('Method not implemented.');
    }
}
