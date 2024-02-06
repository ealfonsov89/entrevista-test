import { useContext } from "react";
import { API_URL, Customer } from "./customers.model";
import { AppContext } from "./AppContext";

export function Actions(props: { customer: Customer }) {
  const { customer } = props;
  const { setCustomers, setSelectedCustomer } = useContext(AppContext);
  const deleteCustomer = () => {
    setCustomers((customers) =>
      customers.filter((customerItem) => customerItem.id !== customer.id)
    );

    fetch(`${API_URL}/Customer/${customer.id}`, {
      method: "DELETE",
    });
  };
  return (
    <div style={{ display: "flex", flexFlow: "column", gap: 5 }}>
      <button type="button" onClick={deleteCustomer}>
        delete
      </button>
      <button type="button" onClick={() => setSelectedCustomer(customer)}>
        edit
      </button>
    </div>
  );
}
