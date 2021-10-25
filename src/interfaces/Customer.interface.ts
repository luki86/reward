import {Transaction} from "interfaces/Transaction.interface";

export interface Customer {
    id: string;
    name: string;
    surName: string;
    transactions: Transaction[]
}
