import logger from 'debug'
import Koa from 'koa'
import bodyParser from 'koa-better-body'
import favicon from 'koa-favicon'
import mount from 'koa-mount'
import serve from 'koa-static'
import convert from 'koa-convert'

import config from '../config'
import catcher from './middleware/catcher'
import render from './middleware/render'
import context from './middleware/context'

import login from './routes/login'

const app = new Koa();

// Add query string parsing for koa
require('koa-qs')(app);

// Middleware
app.use(favicon(config.http.favicon));
app.use(convert(bodyParser({
  formLimit: '200kb',
  jsonLimit: '200kb',
  bufferLimit: '4mb'
})));
app.use(context);
app.use(catcher);

// Login router
app.use(login.routes());

// Serve static files
Object.keys(config.http.static).forEach(staticURL =>{
  logger('app:static')(staticURL);
  app.use(mount(staticURL, convert(serve(config.http.static[ staticURL ]))))
});

app.use(render);

app.listen(config.http.port, function(){
  logger('app:start')('Listening on port ' + config.http.port)
});
