// @ts-ignore
import Auth0 from 'react-native-auth0';

export const AUTH0_DOMAIN = 'contoso-test.eu.auth0.com';
export const AUTH0_CLIENT_ID = '6JGZ4XhE3TTLEeN9wUFwIw8E7rz96OZw';

export const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID
});