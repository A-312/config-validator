

const path = require('path')
const http = require('http')
const blueconfig = require('blueconfig')

blueconfig.addFormat(require('blueconfig-format-with-validator').ipaddress)

const conf = blueconfig({
  ip: {
    doc: 'The IP Address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port to bind.',
    format: 'int',
    default: 0,
    env: 'PORT'
  }
}).merge(path.join(__dirname, 'config.json')).validate()

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World\n')
}).listen(conf.get('port'), conf.get('ip'), function() {
  const addy = server.address()
  console.log('running on http://%s:%d', addy.address, addy.port) // eslint-disable-line no-console
})
