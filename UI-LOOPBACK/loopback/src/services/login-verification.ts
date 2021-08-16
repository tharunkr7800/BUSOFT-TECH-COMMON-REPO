// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-access-control-migration
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {UserService} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import {compare} from 'bcryptjs';
import {Users} from '../models/users.model';
import {UsersRepository} from '../repositories/users.repository';
import {bcryptHasher} from './hash.password.bcrypt';

/**
 * A pre-defined type for user credentials. It assumes a user logs in
 * using the email and password. You can modify it if your app has different credential fields
 */
export type Credentials = {
  email: string;
  password: string;
};

export class MyUserService implements UserService<Users, Credentials> {

  constructor(
    @repository(UsersRepository)
    public userRepository: UsersRepository,
    @inject('service.hasher')
    public hasher: bcryptHasher
  ) { }

  async verifyCredentials(credentials: Credentials): Promise<Users> {
    const invalidCredentialsError = 'Invalid email or password.';
    const NoUserFoundError = 'No found user';

    const foundUser = await this.userRepository.findOne({
      where: {email: credentials.email},
    });

    if (!foundUser) {
      throw new HttpErrors.Unauthorized(NoUserFoundError);
    }
    if (foundUser) {
      console.log(foundUser);
    }

    const passwordMatched = await compare(
      credentials.password,
      foundUser.password,
    );
    if (!passwordMatched) {
      console.log(credentials.password);
      console.log(foundUser.password);

      throw new HttpErrors.Unauthorized(invalidCredentialsError);

    }
    return foundUser;
  }

  convertToUserProfile(user: Users): UserProfile {
    // let userName = '';
    // if (user.firstName) {
    //   userName = user.firstName;
    // }
    // if (user.lastName) {
    //   userName = user.firstName
    //     ? `${user.firstName} ${user.lastName}`
    //     : user.lastName;
    // }
    return {
      [securityId]: user.id.toString(),
      name: `${user.firstname} ${user.lastname}`,
      id: user.id,
      email: user.email,
    };
  }
}


// below public hasher: bcryptHasher,
// @inject(SecurityBindings.USER) public user: UserProfile

    // const credentialsFound = await this.userRepository.findCredentials(
    //   foundUser.id,
    // );
    // if (!credentialsFound) {
    //   throw new HttpErrors.Unauthorized(invalidCredentialsError);
    // }
