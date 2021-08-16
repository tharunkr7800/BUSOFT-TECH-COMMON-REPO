// import { inject } from '@loopback/core';
// import {MiddlewareSequence, SequenceActions} from '@loopback/rest';

// export class MySequence extends MiddlewareSequence {
//   // @inject(SequenceActions.INVOKE_MIDDLEWARE, {optional: true})
// }

//1111
import {AuthenticateFn, AuthenticationBindings, AUTHENTICATION_STRATEGY_NOT_FOUND, USER_PROFILE_NOT_FOUND} from '@loopback/authentication';
import {inject} from '@loopback/context';
import { ApplicationConfig, config } from '@loopback/core';
import {
  FindRoute,
  InvokeMethod,
  InvokeMiddleware,
  InvokeMiddlewareOptions,
  MiddlewareSequence,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler
} from '@loopback/rest';

const SequenceActions = RestBindings.SequenceActions;



export class MySequence implements SequenceHandler {
// export class MySequence implements SequenceHandler {
  // @inject(SequenceActions.MIDDLEWARE, {optional: true})
  protected invokeMiddleware: InvokeMiddleware = () => false;
  constructor(
    @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(SequenceActions.SEND) public send: Send,
    @inject(SequenceActions.REJECT) public reject: Reject,
    @inject(AuthenticationBindings.AUTH_ACTION)
    protected authenticateRequest: AuthenticateFn,
    @config()
    readonly options: InvokeMiddlewareOptions = MiddlewareSequence.defaultOptions,
    // options: ApplicationConfig = {}
  ) { }

  async handle(context: RequestContext): Promise<void>  {
    // options: ApplicationConfig = {}
    try {
      const {request, response} = context;
      await this.invokeMiddleware(context, this.options);
      response.header('Access-Control-Allow-Origin', '*');
      response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      if (request.method == 'OPTIONS') {
          response.status(200)
          this.send(response, 'ok');
      } else {
      const route = this.findRoute(request);
      await this.authenticateRequest(request);
      const args = await this.parseParams(request, route);
      const result = await this.invoke(route, args);
      this.send(response, result);
    }
   } catch (error) {
      if (error.code == AUTHENTICATION_STRATEGY_NOT_FOUND ||
        error.code == USER_PROFILE_NOT_FOUND
      ) {
        Object.assign(error, {statusCode: 404});
      }
      this.reject(context, error);


    }
  }
}
