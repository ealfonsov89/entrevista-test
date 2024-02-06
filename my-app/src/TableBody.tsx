import React, { useMemo } from "react";
import { AppContext } from "./AppContext";
import { Actions } from "./Actions";

export function TableBody() {
  const { customers } = React.useContext(AppContext);
  const paginatedCustomers = useMemo(() => customers.slice(0, 10), [customers]);
  return (
    <tbody>
      {paginatedCustomers.map((customer) => (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>{customer.email}</td>
          <td>{customer.first}</td>
          <td>{customer.last}</td>
          <td>{customer.company}</td>
          <td>{customer.createdAt.toISOString()}</td>
          <td>{customer.country}</td>
          <td>
            <Actions customer={customer} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
