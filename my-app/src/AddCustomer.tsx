import { useContext, useEffect, useRef } from "react";
import { AppContext } from "./AppContext";
import { API_URL, Customer } from "./customers.model";

export function AddCustomer() {
  const { setCustomers, selectedCustomer, setSelectedCustomer } =
    useContext(AppContext);
  const formRef = useRef<HTMLFormElement>(null);

  function addCustomer(customer: Customer) {
    setCustomers((customers) => [...customers, customer]);

    fetch(`${API_URL}/Customer`, {
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }
  function editCustomer(customerId: number, customer: Customer) {
    setCustomers((customers) =>
      customers.map((customerItem) =>
        customerItem.id === customerId
          ? { ...customer, id: customerId }
          : customerItem
      )
    );
    setSelectedCustomer(null);
    fetch(`${API_URL}/Customer`, {
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
  }

  const onCustomerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = Number(formData.get("customerId"));
    const customer: Customer = {
      id: id,
      email: formData.get("email") as string,
      first: formData.get("first") as string,
      last: formData.get("last") as string,
      company: formData.get("company") as string,
      createdAt: new Date(formData.get("createdAt") as string),
      country: formData.get("country") as string,
    };
    if (!id) {
      addCustomer(customer);
    } else {
      editCustomer(id, customer);
    }
    formRef.current?.reset();
  };

  useEffect(() => {
    if (selectedCustomer) {
      const form = formRef.current;
      if (form) {
        form.customerId.value = selectedCustomer.id;
        form.email.value = selectedCustomer.email;
        form.first.value = selectedCustomer.first;
        form.last.value = selectedCustomer.last;
        form.company.value = selectedCustomer.company;
        form.createdAt.value = selectedCustomer.createdAt
          .toISOString()
          .split("T")[0];
        form.country.value = selectedCustomer.country;
      }
    }
  }, [selectedCustomer]);

  return (
    <form
      ref={formRef}
      onSubmit={onCustomerSubmit}
      style={{ display: "flex", flexFlow: "row", gap: "10px" }}
    >
      <input name="customerId" type="hidden" />
      <input name="email" type="email" />
      <input name="first" type="text" />
      <input name="last" type="text" />
      <input name="company" type="text" />
      <input name="createdAt" type="date" />
      <input name="country" type="text" />
      <input type="submit" value="Submit" />
    </form>
  );
}
