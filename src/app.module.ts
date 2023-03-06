import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterSchema } from './schemas/character.schema';
import { CharacterService } from './character/character.service';
import { CharacterController } from './character/character.controller';
import * as dotenv from 'dotenv';
import { UsersController } from './users/users.controller';
import { UserSchema } from './schemas/user.schema';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@dnd.on7bfve.mongodb.net/?retryWrites=true&w=majority`,
      {
        dbName: 'dnd-app',
      },
    ),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Character', schema: CharacterSchema },
    ]),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, UsersController, CharacterController],
  providers: [AppService, UsersService, CharacterService],
})
export class AppModule {}
