import { Body, Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './schemas/comment.schema';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    await this.commentsService.create(createCommentDto);
  }
  @Get('/:coffeeId')
    async find(@Param('coffeeId') coffeeId: string) {
    return this.commentsService.find(coffeeId);
    }
    @Get()
    async findAll(): Promise<Comment[]> {
      return this.commentsService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Comment> {
      return this.commentsService.findOne(id);
    }
  
}
