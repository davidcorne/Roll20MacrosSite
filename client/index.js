const Roll20Macros = {
    characterNumber: 1,
    skillNumber: 1,
    addField: function(name) {
        const deep = true
        const fields = document.getElementsByClassName(name)
        const field = fields[fields.length - 1].cloneNode(deep)
        const container = document.getElementById(name + "Container")
        container.appendChild(field)
    },
    addCharacter: function() {
        this.characterNumber += 1
        this.addField("character")
    },
    removeCharacter: function(button) {
        if (this.characterNumber > 1) {
            this.characterNumber -= 1
            button.parentElement.remove()
        }
    },
    addSkill: function() {
        this.skillNumber += 1
        this.addField("skill")
    },
    removeSkill: function(button) {
        if (this.skillNumber > 1) {
            this.skillNumber -= 1
            button.parentElement.remove()
        }
    },
    generateOutput: function() {
        const characters = this.getCharacters()
        const skills = this.getSkills()
        const macro = this.generateMacro(characters, skills)
        const output = document.getElementById('macroOutput')
        output.innerHTML = macro

        const copyButton = document.getElementById("copyButton")
        copyButton.disabled = false
    },
    copyOutput: function() {
        const output = document.getElementById('macroOutput')
        output.select()
        output.setSelectionRange(0, 99999)
        document.execCommand('copy')
    },
    getTextValues: function(type) {
        const typeNodes = document.getElementsByClassName(type + "Name")
        const textValues = []
        for (typeNode of typeNodes) {
            textValues.push(typeNode.value)
        }
        return textValues
    },
    getCharacters: function() {
        return this.getTextValues('character')
    },
    getSkills: function() {
        return this.getTextValues('skill')
    },
    generateCharacter: function(character, skill) {
        return `{{${character}=[[1d20 + @{${character}|${skill}}]]&#125;&#125; `
    },
    generateSkill: function(characters, skill) {
        let characterText = ''
        for (character of characters) {
            characterText += this.generateCharacter(character, skill)
        }
        return `|${skill}, /w gm &{template:default&#125; {{name=Group Secret ${skill} Check&#125;&#125; ${characterText}`
    },
    generateMacro: function(characters, skills) {
        let skillsText = ''
        for (skill of skills) {
            skillsText += this.generateSkill(characters, skill)
        }

        return `?{Which Skill${skillsText}}`
    }
}

if (typeof module !== 'undefined') {
    module.exports = Roll20Macros
}
