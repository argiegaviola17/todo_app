import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { AddTodoDto } from './dto/add-todo.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller("todo")
export class TodoController {
    constructor(private readonly todoService: TodoService){}
    @Post("add")
    async add(@Body() params: AddTodoDto){
        return this.todoService.add(params);
    }

    @Patch("update")
    async update(@Body() params: UpdateTodoDto){
        return this.todoService.update(params);
    }

    @Delete("delete")
    async delete(@Body() params: DeleteTodoDto){
        return this.todoService.delete(params);
    }

    @Get("all")
    async getAllTodos(){
        return this.todoService.getAllTodos();
    }

    @Get(":id")
    async getOneTodo(@Param("id") id){
        return this.todoService.getOneTodo(id);
    }
}
