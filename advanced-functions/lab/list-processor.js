//CLOSURE

function listProcessor(cmds) {
    const list = [];

    function add(string) {
        list.push(string);
    }

    function remove(string) {
        for (let word of list) {
            if (word == string) {
                list.splice(list.indexOf(word), 1);
            }
        }
    }

    function print() {
        console.log(list.join(','))
    }

    const listFunctions  = {
        add,
        remove,
        print
    };

    for (let cmd of cmds) {
        let [command, value] = cmd.split(' ');
        
        for (key of Object.keys(listFunctions)) {
            if (command == key) {
                listFunctions[key](value);
            }
        }
    }
}