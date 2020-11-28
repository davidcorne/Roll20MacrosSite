'use strict'
/* global describe, it */
const chai = require('chai')
chai.use(require('chai-string'))
const assert = chai.assert

const Roll20Macros = require('./index')

describe('Macro generation', function() {
    it('One character, one skill', function() {
        const expected = '?{Which Skill|PERCEPTION, /w gm &{template:default&#125; {{name=Group Secret PERCEPTION Check&#125;&#125; {{Chad Blaze=[[1d20 + @{Chad Blaze|PERCEPTION}]]&#125;&#125; }'
        const generated = Roll20Macros.generateMacro(['Chad Blaze'], ['PERCEPTION'])
        assert.strictEqual(generated, expected)
    })
})