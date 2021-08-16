import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'testMLDB', table: 'Products'}}})
export class Products extends Entity {
  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'Product', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  product?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
