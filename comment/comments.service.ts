import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<CommentDocument>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const createdComment = await this.commentModel.create(createCommentDto);
    return createdComment;
  }
  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }
  find(coffeeId: string) { // id is not _id here, I suggest you to name it category instead 
    return this.commentModel.find({ coffeeId: coffeeId }).exec();
  }

  async findOne(id: string): Promise<Comment> {
    return this.commentModel.findOne({ _id: id }).exec();
  }

}
