function cityTaxes(name, population, treasury){
    const result = {
        name, 
        population, 
        treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
            Math.floor(this.treasury);
        },
        applyGrowth(percent) {
            this.population += this.population * (percent / 100);
            Math.floor(this.population);
        },
        applyRecession(percent) {
            this.treasury -= this.treasury * (percent / 100);
            Math.floor(this.treasury);
        }
    };
    return result;
}
