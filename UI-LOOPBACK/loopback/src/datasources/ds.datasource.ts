import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

// const config = {
//   name: 'ds',
//   connector: 'mysql',
//   url: '',
//   host: 'test4dcrm.cbf9endmbguy.us-east-1.rds.amazonaws.com',
//   port: 7961,
//   user: 'testcrmadmin',
//   password: 'iyXwUS2$021!S7gyqPoUaYw',
//   database: 'testMLDB'
// };


const config = {
  name: 'ds',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root@123',
  database: 'test'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ds';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
