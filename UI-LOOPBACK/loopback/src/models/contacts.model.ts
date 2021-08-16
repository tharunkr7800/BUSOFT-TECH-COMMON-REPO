import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'test', table: 'contacts'}}})
export class Contacts extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'contactId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  contactId: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'firstName', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstName?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'lastName', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastName?: string;

  @property({
    type: 'string',
    length: 13,
    mysql: {columnName: 'officePhoneNo', dataType: 'varchar', dataLength: 13, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  officePhoneNo?: string;

  @property({
    type: 'string',
    length: 13,
    mysql: {columnName: 'homePhoneNo', dataType: 'varchar', dataLength: 13, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  homePhoneNo?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'email', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  email?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'dob', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dob?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'peopleType', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  peopleType?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'addressLine1', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressLine1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'addressLine2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressLine2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'addressLine3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  addressLine3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'city', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  city?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'town', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  town?: string;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'postalCode', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  postalCode?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'country', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  country?: string;

  @property({
    type: 'string',
    length: 60,
    mysql: {columnName: 'organization', dataType: 'varchar', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  organization?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'status', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  status?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'interactions', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  interactions?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Contacts>) {
    super(data);
  }
}

export interface ContactsRelations {
  // describe navigational properties here
}

export type ContactsWithRelations = Contacts & ContactsRelations;
