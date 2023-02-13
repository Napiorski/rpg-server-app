import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentSchema } from './schemas/student.schema';
import { StudentController } from './controller/student.controller';
import { StudentService } from './service/student.service';
import { CharacterService } from './character/character.service';
import { CharacterController } from './character/character.controller';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@dnd.on7bfve.mongodb.net/?retryWrites=true&w=majority`,
      {
        dbName: 'dnd-app',
      },
    ),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [AppController, StudentController, CharacterController],
  providers: [AppService, StudentService, CharacterService],
})
export class AppModule {}
