const Hapi = require('hapi')
const Promise = require('bluebird')

const server = new Hapi.Server()

server.connection({port : 3000})

server.route({
    method: 'GET',
    path: '/download',
    handler: function (request, reply) {
        reply('downloading')   
    }
})

module.exports = new Promise((resolve, reject) => {
    server.start((err) => {
        if(err) return reject(err)
        
        console.log(`connection established on port %s`, server.info.port)
        resolve(server);
    })
})