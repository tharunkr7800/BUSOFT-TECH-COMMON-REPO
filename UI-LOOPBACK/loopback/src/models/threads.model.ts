import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'testMLDB', table: 'Threads'}}})
export class Threads extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Foreign Key', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  foreignKey?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Incident Thread ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  incidentThreadId?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Account', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  account?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Attributes', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  attributes?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Date Created', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dateCreated?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Contact ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  contactId?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Channel ID', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  channelId?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Email Header', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  emailHeader?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Sequence', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  sequence?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'SmartSense Indicator', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  smartSenseIndicator?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Text', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  text?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Thread Entry Type', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  threadEntryType?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Threads>) {
    super(data);
  }
}

export interface ThreadsRelations {
  // describe navigational properties here
}

export type ThreadsWithRelations = Threads & ThreadsRelations;
