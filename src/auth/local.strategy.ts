import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    console.log('local.strategy.ts > validate > username: ', username);
    console.log('local.strategy.ts > validate > password: ', password);
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    // Now we have a user object, parse out the fields the client will need.

    // This is what gets returned back to the client
    console.log(
      'local.strategy.ts > validate > user: ',
      JSON.stringify(user, null, 2),
    );
    return user;
  }
}
