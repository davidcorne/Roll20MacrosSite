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

    }
}