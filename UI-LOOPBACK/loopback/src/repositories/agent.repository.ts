import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Agent, AgentRelations} from '../models';

export class AgentRepository extends DefaultCrudRepository<
  Agent,
  typeof Agent.prototype.agentId,
  AgentRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Agent, dataSource);
  }
}
