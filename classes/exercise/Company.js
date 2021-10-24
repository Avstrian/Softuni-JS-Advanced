class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        const checker = [name, salary, position, department];

        if (checker.includes('') || checker.includes(null) || checker.includes(undefined)) {
            throw new Error('Invalid input!')
        }
        if (salary < 0) {
            throw new Error('Invalid input!')
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({
            name,
            salary,
            position
        })
        
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let highestAverageSalary = 0;
        let bestDepartment = ''
        let result = '';

        for (let [key, value] of Object.entries(this.departments)) {
            let currentSalary = 0;
            for (let object of value) {
                currentSalary += object.salary
            }

            currentSalary /= value.length;

            if (currentSalary > highestAverageSalary) {
                highestAverageSalary = currentSalary;
                bestDepartment = key;
            }
        }

        result += `Best Department is: ${bestDepartment}\n`
        result += `Average salary: ${highestAverageSalary.toFixed(2)}\n`

        this.departments[bestDepartment]
            .sort((a, b) => a.name.localeCompare(b.name))
            .sort((a, b) => b.salary - a.salary);
        
        const resultEmployees = []

        for (let employees of this.departments[bestDepartment]) {
            resultEmployees.push(`${employees.name} ${employees.salary} ${employees.position}`);
        }
        result += resultEmployees.join('\n');

        return result;
    }
}
