import {
  Controller,
  Post,
  Delete,
  Get,
  Put,
  Res,
  Body,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // HTTP POST - /user BODY: { ...data }
  @Post() async createUser(
    @Res() response,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    try {
      // check if the user already exists
      const user = await this.usersService.getUser(username);
      if (user) {
        return response
          .status(HttpStatus.BAD_REQUEST)
          .json({ msg: 'User already exists' });
      }

      const newUser = await this.usersService.createUser(username, password);
      return response.status(HttpStatus.CREATED).json({
        message: 'User has been created successfully',
        newUser,
      });
    } catch (err) {
      console.error(err);
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get()
  async getUsers(@Res() response) {
    try {
      const userData = await this.usersService.getUsers();
      return response.status(HttpStatus.OK).json({
        message: 'All user data found successfully',
        userData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getUser(@Res() response, @Param('id') userId: string) {
    try {
      const existingUser = await this.usersService.getUser(userId);
      return response.status(HttpStatus.OK).json({
        message: 'User found successfully',
        existingUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') userId: string) {
    try {
      const deletedUser = await this.usersService.deleteUser(userId);
      return response.status(HttpStatus.OK).json({
        message: 'User deleted successfully',
        deletedUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateUser(
    @Res() response,
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const existingUser = await this.usersService.updateUser(
        userId,
        updateUserDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'User has been successfully updated',
        existingUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
