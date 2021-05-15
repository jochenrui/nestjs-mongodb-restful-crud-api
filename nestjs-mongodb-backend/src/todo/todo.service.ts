import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
