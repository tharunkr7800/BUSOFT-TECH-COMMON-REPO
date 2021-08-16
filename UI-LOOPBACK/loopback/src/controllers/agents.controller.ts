import {repository} from '@loopback/repository';
import {getJsonSchemaRef, post, requestBody} from '@loopback/rest';
import {Agent} from '../models';
import {AgentRepository} from '../repositories';


export class AgentsController {
  constructor(
    @repository(AgentRepository)
    private agentRepository: AgentRepository,

  ) { }

  @post('/agents/createAgent', {
    responses: {
      200: {
        description: 'Create Agent',
        content: {
          schema: getJsonSchemaRef(Agent)
        },
      },
    },
  })

  async createAgent(@requestBody() newAgent: Agent): Promise<Agent> {

    const agentCreate = await this.agentRepository.create(newAgent);
    return agentCreate;

  }




}


