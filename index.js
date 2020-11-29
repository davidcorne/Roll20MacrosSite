'use strict'
const express = require('express')

const APP = express()
const HTTP = require('http').Server(APP)
const fs = require('fs')

const configuration = {
    port: 4000
}

APP.set('port', configuration.port)
APP.use(express.static('client'))

const log = {
    info: function(message) {
        console.info(message)
    }
}

const start = function () {
    HTTP.listen(APP.get('port'), function () {
        log.info('Listening on *:' + APP.get('port'))
    })
}

module.exports.start = start

// Allow you to run the worker as a single process if you don't need the cluster.
if (require.main === module) {
  start()
}
