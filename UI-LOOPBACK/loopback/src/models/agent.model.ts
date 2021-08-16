import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'testMLDB', table: 'Agent'}}})
export class Agent extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'agentId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  agentId: number;

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
    length: 45,
    mysql: {columnName: 'profile', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  profile?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'status', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  status?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'email', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  email?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'password', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  password?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'confirmPassword', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  confirmPassword?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'username', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  username?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'phoneNo', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  phoneNo?: string;

  // @property({
  //   type: 'Blob',
  //   length: 65535,
  //   mysql: {columnName: 'profilePic', dataType: 'blob', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  // })
  // profilePic?: Blob;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Agent>) {
    super(data);
  }
}

export interface AgentRelations {
  // describe navigational properties here
}

export type AgentWithRelations = Agent & AgentRelations;
