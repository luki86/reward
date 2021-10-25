import React from "react";
import {Customer} from "interfaces/Customer.interface";
import {Transaction} from "interfaces/Transaction.interface";
import {countPoints} from "helpers/countPoints/countPoints";
import {groupBy} from "lodash";
import TransactionTable from "components/TransactionTable";

interface CustomerPointsProps {
    customer: Customer;
}

function getRewardSum(transactions: Transaction[]) {
    groupTransactionsByMonths(transactions);
    return transactions.reduce((prev, current) => {
        return prev + countPoints(Number(current.amount));
    }, 0)
}

function groupTransactionsByMonths(transactions: Transaction[]) {
    return groupBy(transactions, transaction => {
        return new Date(transaction.date).toLocaleString('default', {month: 'long'});
    })
}

function CustomerPoints({customer}: CustomerPointsProps) {
    return (
        <section>
            <h2>{customer.name} {customer.surName}</h2>
            <TransactionTable transactions={customer.transactions}/>
            <div>
                Reward points (three months period):
                <ul>
                    {Object.entries(groupTransactionsByMonths(customer.transactions)).map(([month, transactionsInMonth]) => {
                        return (
                            <li key={month}>{month} - {getRewardSum(transactionsInMonth)}</li>
                        );
                    })}
                </ul>
            </div>
            <div>Reward points sum: <strong>{getRewardSum(customer.transactions)}</strong></div>
        </section>
    );
}

export default CustomerPoints
