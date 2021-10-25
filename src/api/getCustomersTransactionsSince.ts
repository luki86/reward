import {format} from 'date-fns'
import {generateCustomersTransactions} from "helpers/dataGenerator";
import {getRandomInteger} from "helpers/getRandomInteger";
import {Customer} from "interfaces/Customer.interface";


export const getCustomersTransactionsSince = async (since: Date): Promise<Customer[]> => {
    const formattedDate = format(since, 'dd-MM-yyyy');
    console.log(`calling api: .../customers-transactions?since=${formattedDate}`)

    return new Promise(resolve => {
        setTimeout(() => resolve(generateCustomersTransactions()), getRandomInteger(100, 3000));
    })

}
