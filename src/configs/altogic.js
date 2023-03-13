import { createClient } from 'altogic';

// This `envUrl` and `clientKey` is sample you need to create your own.
let envUrl = 'https://c1-europe.altogic.com/e:640efb1a70a06787d22da07f';
let clientKey = '23b75c5398ee40c79a8b8b572da08df9';

const altogic = createClient(envUrl, clientKey, {
  signInRedirect: '/sign-in',
});

export default altogic;
