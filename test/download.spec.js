'use strict'

const _ = require('lodash')
const Promise = require('bluebird')

describe('Download', function() {
    let server

    before(function () {
        return require('../server').then((s) => {
            server = s
        })
    })

    
    it('Trying to donwload', function() {
        return server.inject({method: 'get', url: '/download'})
        .then((res) => {
            console.log('xxx', res.body)
        })
        .catch((err) => {
            console.log(err)
        })
    })
})
