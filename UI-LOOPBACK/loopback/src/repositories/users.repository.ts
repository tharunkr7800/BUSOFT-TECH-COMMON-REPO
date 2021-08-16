import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {UserRelations, Users} from '../models';

export type Credentials = {
  email: string;
  password: string;
};

export type userprofile = {
  email: string;
  name: string;
};

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UserRelations
> {

  static create(userData: Users) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Users, dataSource);
  }
}
