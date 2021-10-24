//CLOSURE

function filterEmployees(data, criteria) {
    const criteriaSplit = criteria.split('-');

    let dataParsed = JSON.parse(data);
    let counter = 0;

    if (criteria == 'all') {
        for (let object of dataParsed) {
            console.log(`${counter}. ${object["first_name"]} ${object["last_name"]} - ${object["email"]}`)
            counter += 1;
        }
    } 
    else {
        for (let object of dataParsed) {
            for (let [key, value] of Object.entries(object)) {
                if (key == criteriaSplit[0] && value == criteriaSplit[1]) {
                    console.log(`${counter}. ${object["first_name"]} ${object["last_name"]} - ${object["email"]}`)
                    counter += 1;
                }
            }
        }
    }
}