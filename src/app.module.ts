import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterSchema } from './schemas/character.schema';
import { CharacterService } from './character/character.service';
import { CharacterController } from './character/character.controller';
import * as dotenv from 'dotenv';
import { UserController } from './user/user.controller';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './user/user.service';
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
  ],
  controllers: [AppController, UserController, CharacterController],
  providers: [AppService, UserService, CharacterService],
})
export class AppModule {}
