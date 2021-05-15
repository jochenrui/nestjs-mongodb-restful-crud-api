import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

/**
 * contains logic for data handling
 */
@Injectable()
export class TodoService {
  /**
   * inject Model as dependency into constructor of class
   * @InjectModel takes name of our Model as Param
   * private
   * readonly
   * is of type "model" & passed generic type TodoDocument
   * generic type allows us to access all Mongoose methods for querying, altering & creating data
   */
  constructor(
    @InjectModel(Todo.name) private readonly model: Model<TodoDocument>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.model.find().exec();
  }

  async findById(id: string): Promise<Todo> {
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    /**
     * create new Todo object with title, description & createdAt
     * saves the object in our DB
     */
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<Todo> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
