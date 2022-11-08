import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import httpStatus from 'http-status';
import { adaptRoute } from '../../core/infra/adapters/ExpressRouteAdapter';
import { createCustomerFactory } from '../../modules/Customer/controllers/CreateCustomerController';
import { updateCustomerFactory } from '../../modules/Customer/controllers/UpdateCustomerController';
import { getCustomerFactory } from '../../modules/Customer/controllers/GetCustomerController';
import { initKeycloak } from './keycloack-config';

const app = express();

const keycloak = initKeycloak();

app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(helmet());
app.use(cors());
app.use(keycloak.middleware());
app.post('/customers', keycloak.protect('user'), adaptRoute(createCustomerFactory()));
app.put('/customers/:id', keycloak.protect('user'), adaptRoute(updateCustomerFactory()));
app.get('/customers/:id', keycloak.protect(), adaptRoute(getCustomerFactory()));

app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).json();
});

export { app };
