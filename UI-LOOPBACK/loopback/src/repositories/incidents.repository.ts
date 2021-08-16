import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Incidents, IncidentsRelations} from '../models';

export class IncidentsRepository extends DefaultCrudRepository<
  Incidents,
  typeof Incidents.prototype. incidentId,
  IncidentsRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Incidents, dataSource);
  }
}
