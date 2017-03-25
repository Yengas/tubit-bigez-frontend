import { stores } from '../../client/stores'
import config from '../../config'

/**
 * Middleware for creating the context
 * @param ctx
 * @param next
 */
export default async(ctx, next) => {
  // Get our token from headers (server) or cookies (client)
  ctx.token = ctx.headers[config.headers.token] || ctx.cookies.get(config.headers.token)

  // Create the context with params and hostname for SSR
  const state = {
    common: {
      hostname: ctx.headers.host
    }
  };

  /*const account = await getAccount(ctx.token)
  if (account) {
    state.account = account
  }*/

  // Finally initialize state. This should come last
  ctx.stores = stores(state, ctx.token);
  await next()
}