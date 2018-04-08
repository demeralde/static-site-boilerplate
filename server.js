/* eslint import/no-extraneous-dependencies: 0 */
const liveServer = require('live-server');

const params = {
  port: 8080,
  host: '0.0.0.0',
  root: './build/templates',
  open: false,
  ignore: './assets',
  file: 'home-page.html',
  wait: 1000,
  logLevel: 2,
  mount: [
    ['/static/css', './build/css'],
    ['/static/fonts', './build/fonts'],
    ['/static/img', './build/img'],
    ['/static/js', './build/js'],
  ],
};

liveServer.start(params);
