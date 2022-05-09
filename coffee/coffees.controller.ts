import { Body, Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './schemas/coffee.schema';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

    @Post()
    async create(@Body() createCoffeeDto: CreateCoffeeDto) {
      await this.coffeesService.create(createCoffeeDto);
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Coffee> {
      return this.coffeesService.findOne(id);
    }
    @Get()
    async getAllCoffeeByName(
      @Query('searchCoffee') searchCoffee: string,
    ) {
      return this.coffeesService.findAll(searchCoffee);
    }
  
}
