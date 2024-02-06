import { useEffect, useState } from "react";
import "./App.css";
import {
  API_URL,
  Customer,
  CustomerRaw,
  mapCustomerFromRaw,
} from "./customers.model";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { AddCustomer } from "./AddCustomer";
import { AppContext } from "./AppContext";

function App() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  useEffect(() => {
    console.table(customers);
  }, [customers]);
  useEffect(() => {
    fetch(`${API_URL}/Customer/0/10`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data: CustomerRaw[]) =>
        data.map((customer) => mapCustomerFromRaw(customer))
      )
      .then((customers) => setCustomers(customers));
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          customers,
          setCustomers,
          selectedCustomer,
          setSelectedCustomer,
        }}
      >
        <AddCustomer />
        <table>
          <TableHead />
          <TableBody />
        </table>
      </AppContext.Provider>
    </>
  );
}

export default App;
