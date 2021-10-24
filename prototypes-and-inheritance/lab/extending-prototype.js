function extendClass(cls) {
    cls.prototype.species = 'Human';
    cls.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    } 
}