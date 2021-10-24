function sortTickets(data, cmd) {
    const result = [];

    class Tickets {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    

    for (let entry of data) {
        const entryList = entry.split('|');
        result.push(new Tickets(...entryList));
    }
    
    if (cmd == 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (cmd == 'price') {
        result.sort((a, b) => a.price - b.price);
    }
    else if (cmd == 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status));

    }
    return result;
}