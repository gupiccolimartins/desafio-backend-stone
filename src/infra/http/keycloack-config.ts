import session from 'express-session';
import Keycloak from 'keycloak-connect';
import { app } from './app';

let _keycloak;

// const keycloakConfig = {
//   "realm": "careers",
//   "auth-server-url": "https://accounts.seguros.vitta.com.br/auth/",
//   "ssl-required": "external",
//   "resource": "customers",
//   "verify-token-audience": true,
//   "credentials": {
//     "secret": "453000f7-47a0-4489-bc47-891c742650e2"
//   },
//   "use-resource-role-mappings": true,
//   "confidential-port": 0
// }

const keycloakConfig = {
  'confidential-port': 0,
  'auth-server-url': 'https://accounts.seguros.vitta.com.br/auth/',
  'resource': 'customers',
  'ssl-required': 'external',
  'realm': 'careers'
}


const initKeycloak = () => {
  if (_keycloak) {
    console.warn("Tentando iniciar Keycloak novamente!");
    return _keycloak;
  }

  console.log("Iniciando Keycloak...");
  const memoryStore = new session.MemoryStore();
  app.use(session({
    secret: '453000f7-47a0-4489-bc47-891c742650e2',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  }))
  _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
  return _keycloak;
}

const getKeycloak = () => {
  if (!_keycloak) {
    console.error('Keycloak nao foi iniciado.');
  }
  return _keycloak;
}

export { initKeycloak, getKeycloak };