/*
https://docs.nestjs.com/providers#services
*/

import * as uuid from 'uuid';

import * as CyclicDB from '@cyclic.sh/dynamodb';
import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

import { AddTodoDto } from './dto/add-todo.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

const db = CyclicDB("sleepy-flannel-shirt-waspCyclicDB")

const todo = db.collection("todo")

@Injectable()
export class TodoService {
    async getOneTodo(id: any) {
        const item = await todo.get(id);
        if(!item){
            throw new HttpException("RECORD_NOT_FOUND",HttpStatus.BAD_REQUEST);
        }
         
        return item;
    }
    async getAllTodos() {
        return todo.list();
    }
    async delete(params: DeleteTodoDto) {
        const item = await this.getOneTodo(params.id);
        await todo.delete(params.id)
        return item;
    }
    async update(params: UpdateTodoDto) {
        await this.getOneTodo(params.id);
        const updateTodo = await this.setTodo(params.id, params);
        return updateTodo;
         
    }
    async add(params: AddTodoDto) {
        const id = uuid.v4();
        const newTodo = await this.setTodo(id, params);
        return newTodo;
    }

    private async setTodo(id: any, params: AddTodoDto | UpdateTodoDto) {
        return await todo.set(id, {
            todo: params.todo,
        });
    }
}
