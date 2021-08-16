import {ApplicationConfig} from '@loopback/core';
import {Crm4Dv5Application} from './application';

/**
 * Export the OpenAPI spec from the application
 */
async function exportOpenApiSpec(): Promise<void> {
  const config: ApplicationConfig = {
    // rest: {
    //   port: +(process.env.PORT ?? 3000),
    //   host: process.env.HOST ?? 'localhost',
    //   cors:{
    //      origin: "http://localhost:4200/signup"
    //   },
    // },
  };
  const outFile = process.argv[2] ?? '';
  const app = new Crm4Dv5Application(config);
  await app.boot();
  await app.exportOpenApiSpec(outFile);
}

exportOpenApiSpec().catch(err => {
  console.error('Fail to export OpenAPI spec from the application.', err);
  process.exit(1);
});
