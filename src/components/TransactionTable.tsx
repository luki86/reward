import React from "react";
import {countPoints} from "helpers/countPoints/countPoints";
import {Transaction} from "interfaces/Transaction.interface";

interface TransactionTableProps {
    transactions: Transaction[]
}

function formatDate(isoDate: string) {
    return new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'short'}).format(new Date(isoDate));
}

function formatCurrency(amount: number, currency: string) {
    const defaultLang = undefined;
    return new Intl.NumberFormat(defaultLang, {style: 'currency', currency}).format(amount);
}

function TransactionTable({transactions}: TransactionTableProps) {
    return (
        <table>
            <thead>
            <tr>
                <th>Transaction name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Reward points</th>
            </tr>
            </thead>
            <tbody>
            {transactions.map((transaction) => {
                return (
                    <tr key={transaction.id}>
                        <td>{transaction.name}</td>
                        <td>{formatDate(transaction.date)}</td>
                        <td>{formatCurrency(Number(transaction.amount), transaction.currency)}</td>
                        <td>{countPoints(Number(transaction.amount))}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}


export default TransactionTable;
