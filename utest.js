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
    }),
    it('Many characters, one skill', function() {
        const expected = '?{Which Skill|Test, /w gm &{template:default&#125; {{name=Group Secret Test Check&#125;&#125; {{A=[[1d20 + @{A|Test}]]&#125;&#125; {{B=[[1d20 + @{B|Test}]]&#125;&#125; {{C=[[1d20 + @{C|Test}]]&#125;&#125; {{D=[[1d20 + @{D|Test}]]&#125;&#125; }'
        const generated = Roll20Macros.generateMacro(['A', 'B', 'C', 'D'], ['Test'])
        assert.strictEqual(generated, expected)
    })
    it('One character, many skills', function() {
        const expected = '?{Which Skill|1, /w gm &{template:default&#125; {{name=Group Secret 1 Check&#125;&#125; {{Dave=[[1d20 + @{Dave|1}]]&#125;&#125; |2, /w gm &{template:default&#125; {{name=Group Secret 2 Check&#125;&#125; {{Dave=[[1d20 + @{Dave|2}]]&#125;&#125; |3, /w gm &{template:default&#125; {{name=Group Secret 3 Check&#125;&#125; {{Dave=[[1d20 + @{Dave|3}]]&#125;&#125; }'
        const generated = Roll20Macros.generateMacro(['Dave'], ['1', '2', '3'])
        assert.strictEqual(generated, expected)
    })
    it('Many characters, many skills', function() {
        const expected = '?{Which Skill|1, /w gm &{template:default&#125; {{name=Group Secret 1 Check&#125;&#125; {{A=[[1d20 + @{A|1}]]&#125;&#125; {{B=[[1d20 + @{B|1}]]&#125;&#125; {{C=[[1d20 + @{C|1}]]&#125;&#125; {{D=[[1d20 + @{D|1}]]&#125;&#125; |2, /w gm &{template:default&#125; {{name=Group Secret 2 Check&#125;&#125; {{A=[[1d20 + @{A|2}]]&#125;&#125; {{B=[[1d20 + @{B|2}]]&#125;&#125; {{C=[[1d20 + @{C|2}]]&#125;&#125; {{D=[[1d20 + @{D|2}]]&#125;&#125; |3, /w gm &{template:default&#125; {{name=Group Secret 3 Check&#125;&#125; {{A=[[1d20 + @{A|3}]]&#125;&#125; {{B=[[1d20 + @{B|3}]]&#125;&#125; {{C=[[1d20 + @{C|3}]]&#125;&#125; {{D=[[1d20 + @{D|3}]]&#125;&#125; }'
        const generated = Roll20Macros.generateMacro(['A', 'B', 'C', 'D'], ['1', '2', '3'])
        assert.strictEqual(generated, expected)
    })
})