import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Contacts, ContactsRelations} from '../models';

export type ContactCredentials = {
  lastName: any;
  officePhoneNo: any;
  email: any;
};



export class ContactsRepository extends DefaultCrudRepository<
  Contacts,
  typeof Contacts.prototype.contactId,
  ContactsRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Contacts, dataSource);
  }
}
