import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'testMLDB', table: 'Incidents'}}
})
export class Incidents extends Entity {
  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Product ID', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  productId?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Category ID', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  categoryId?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Subject', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  subject?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Reference #', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  reference?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'Incident ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  incidentId: number;

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
    mysql: {columnName: 'Assigned Account', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  assignedAccount?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Incidents>) {
    super(data);
  }
}

export interface IncidentsRelations {
  // describe navigational properties here
}

export type IncidentsWithRelations = Incidents & IncidentsRelations;
