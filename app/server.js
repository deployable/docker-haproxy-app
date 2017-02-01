const http = require('http')
const hostname = require('os').hostname()

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write(hostname + '\n')
  res.end()
}).listen(9615, ()=> console.log('listening 9615'))

process.on('SIGINT', ()=> process.exit(0))
process.on('SIGTERM', ()=> process.exit(0))

