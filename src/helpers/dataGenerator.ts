import {addMonths} from "date-fns";
import {Transaction} from "interfaces/Transaction.interface";
import {Customer} from "interfaces/Customer.interface";
import {getRandomInteger} from "helpers/getRandomInteger";


function getRandomAmount(min: number, max: number) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function randomDate() {
    const threeMonthsAgo = addMonths(new Date(), -3)
    const now = new Date();
    return new Date(threeMonthsAgo.getTime() + Math.random() * (now.getTime() - threeMonthsAgo.getTime()));
}

function generateTransactions(records: number) {
    const recordsArray: Transaction[] = new Array(records).fill(undefined).map((record, index) => ({
        id: `${index + 1}`,
        amount: getRandomAmount(1, 500),
        currency: 'USD',
        name: 'Product name ' + (index + 1),
        date: randomDate().toISOString()
    }))
    return recordsArray;
}

export function generateCustomersTransactions(): Customer[] {
    const customersNo = 3;
    const customers = new Array(customersNo).fill(undefined).map((customer, index) => ({
        id: `${index + 1}`,
        transactions: generateTransactions(getRandomInteger(1, 6)),
        name: `Customer-name`,
        surName: `Surname-${index + 1}`
    }));
    console.log('generated data: ', customers);
    return  customers;
}
