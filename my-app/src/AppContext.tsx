import React, { Dispatch } from "react";
import { Customer } from "./customers.model";

export const AppContext = React.createContext<{
  customers: Customer[];
  selectedCustomer: Customer | null;
  setSelectedCustomer: Dispatch<React.SetStateAction<Customer | null>>;
  setCustomers: Dispatch<React.SetStateAction<Customer[]>>;
}>({
  customers: [],
  selectedCustomer: null,
  setSelectedCustomer: () => {
    throw new Error("setSelectedCustomer not implemented");
  },
  setCustomers: () => {
    throw new Error("setCustomer not implemented");
  },
});
