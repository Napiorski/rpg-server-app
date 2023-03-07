import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
// We want CRUD: create, read, update, delete
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  async createUser(username: string, password: string): Promise<User> {
    const newUser = await new this.userModel({ username, password });
    return newUser.save();
  }

  async getUsers(): Promise<User[]> {
    const userData = await this.userModel.find();
    if (!userData || userData.length == 0) {
      throw new NotFoundException('User data not found!');
    }
    return userData;
  }

  async getUser(username: string): Promise<any> {
    console.log('getUser called with username: ', username);
    const existingUser = await this.userModel.findOne({ username }).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${username} not found`);
    }
    return existingUser;
  }

  async deleteUser(userId: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return deletedUser;
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const existingUser = await this.userModel.findByIdAndUpdate(
      userId,
      updateUserDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingUser;
  }
}
