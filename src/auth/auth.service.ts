import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    // TODO: use the bcrypt library to compare the password
    console.log('validateUser found user: ', user);
    if (user && user.password === pass) {
      const { username, _id } = user;
      return { username, userId: _id };
    }
    return null;
  }

  /**
   * At this point we should now have a valid user. See the HTTP POST auth/login
   * @param user
   * @returns
   */
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    console.log(`AuthService login > typeof user: ${typeof user}`);
    console.log(`AuthService login > user: ${JSON.stringify(user)}`);
    console.log(`AuthService login > payload: ${JSON.stringify(payload)}`);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
