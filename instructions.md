The package has been configured successfully!

Make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
import { AAD, AADConfig } from 'adonis-ally-battlenet/build/standalone'

declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    // ... other mappings
    Battlenet: {
      config: AADConfig
      implementation: AAD
    }
  }
}
```

```ts
const allyConfig: AllyConfig = {
  // ... other configs
  /*
  |--------------------------------------------------------------------------
  | Battlenet driver
  |--------------------------------------------------------------------------
  */
  Battlenet: {
    driver: 'Battlenet',
    clientId: Env.get('BATTLENET_CLIENT_ID'),
    clientSecret: Env.get('BATTLENET_CLIENT_SECRET'),
    region: Env.get('BATTLENET_CLIENT_SECRET'),
    callbackUrl: `http://localhost:${process.env.PORT}/battlenet/callback`, // optional
    scopes: ['openid'], // optional
  },
}
```