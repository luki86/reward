import React, {useEffect, useState} from "react";
import {addMonths} from "date-fns";
import {getCustomersTransactionsSince} from "api/getCustomersTransactionsSince";
import {Customer} from "interfaces/Customer.interface";
import CustomerPoints from "components/CustomerPoints";

function RewardPoints() {
    const [customers, setCustomers] = useState<Customer[] | undefined>(undefined)

    useEffect(() => {
        async function fetchTransactions() {
            const threeMonthsAgo = addMonths(new Date(), -3)
            const results = await getCustomersTransactionsSince(threeMonthsAgo);
            setCustomers(results);
        }

        fetchTransactions();
    }, [])

    if (!customers) {
        return <div>Loading...</div>
    }

    return <>
        {customers.map((customer) => {
            return <CustomerPoints customer={customer} key={customer.id}/>
        })}
    </>
}

export default RewardPoints;
