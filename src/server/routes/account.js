import config from '../../config'

export async function getAccount(token){
  return { token };
}

/**
 * Check the authorization of the request maker and return the account.
 * @param ctx {Object} the context object for the koa request.
 * @return
 */
export async function checkAuthorized(ctx){
  const token = ctx.cookies.get(config.headers.token, null);
  ctx.authorized = !!token;
  if(!token) throw new Exception('Token not provided!');
  return { token };
}