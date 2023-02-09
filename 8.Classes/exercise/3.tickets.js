function databaseTickets(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }
    const ticketArr = [];

    for (const line of arr) {
        let [dest, ticketPrice, ticketStatus] = line.split('|');
        ticketPrice = Number(ticketPrice);
        const current = new Ticket(dest, ticketPrice, ticketStatus);
        ticketArr.push(current);
    }

    const sorted = ticketArr.sort((a, b) => {
        if (criteria === 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (criteria === 'price') {
            return a.price - b.price;
        } else if (criteria === 'status') {
            return a.status.localeCompare(b.status);
        }
    });
    return sorted
}




console.log(databaseTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'))
