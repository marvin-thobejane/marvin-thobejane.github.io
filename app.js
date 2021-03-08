const http = require('http')
const file = require('fs')
const port = 3001

const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    file.readFile('index.html', function(error, data) {
        if (error) {
            response.writeHead(404)
            response.writeHead('File Not found')
        } else response.write(data)
        response.end()
    })
});

server.listen(port, function(error) {
    debugger;
    console.log(__dirname)
    if (error) console.log('Something went wrong', error)
    else console.log('Server started: ', 'http://localhost:3001')
})