import router from 'koa-router'
import config from '../../config'
import createRequest from '../../../core/helpers/request'

const request = createRequest(config.backend.host);

export default router()
  .get('/login/facebook', redirectLogin)
  .get('/login/facebook/callback', processLogin);

async function redirectLogin(ctx){
  const token = ctx.cookies.get(config.headers.token);
  if(token) throw new Exception("Already logged in!");
  const result = await request(`login/facebook?redirect_uri=${config.login.url}`);
  if(!result || !result.url || result.error) throw new Exception("Couldn't get login url.");
  ctx.redirect(result.url);

}

async function processLogin(ctx){
  const code = ctx.query.code;
  if(!code) throw new Exception("You have to supply a code.");
  const result = await request(`login/facebook/callback?redirect_uri=${config.login.url}&code=${code}`);
  if(!result || !result.token || result.error) throw new Exception("Couldn't process the given code.");
  // Set the cookie with the given token.
  ctx.cookies.set(config.headers.token, result.token);
  ctx.redirect('/');
}
