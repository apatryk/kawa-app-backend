import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee, CoffeeDocument } from './schemas/coffee.schema';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<CoffeeDocument>,
  ) {}

  async create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    const createdCoffee = await this.coffeeModel.create(createCoffeeDto);
    return createdCoffee;
  }
  find(name: string) {
    return this.coffeeModel.find({ name: name }).exec();
  }

  async findOne(id: string): Promise<Coffee> {
    return this.coffeeModel.findOne({ _id: id }).exec();
  }
  async findAll(
    searchCoffee?: string,
  ) {
    const query = { $text: {$search: searchCoffee} } 
    const findQuery = this.coffeeModel
      .find(query)
      .sort({ _id: 1 })
      .populate('name')

 
    const results = await findQuery;
 
    return results;
  }
}
