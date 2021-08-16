import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Threads, ThreadsRelations} from '../models';

export class ThreadsRepository extends DefaultCrudRepository<
  Threads,
  typeof Threads.prototype.incidentThreadId,
  ThreadsRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Threads, dataSource);
  }
}
