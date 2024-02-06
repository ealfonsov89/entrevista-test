export const API_URL = "http://localhost:5289";

export interface Customer {
  id: number | null;
  email: string;
  first: string;
  last: string;
  company: string;
  createdAt: Date;
  country: string;
}

export interface CustomerRaw {
  id: number;
  email: string;
  first: string;
  last: string;
  company: string;
  createdAt: string;
  country: string;
}

export function mapCustomerFromRaw(customer: CustomerRaw): Customer {
  return {
    id: customer.id,
    email: customer.email,
    first: customer.first,
    last: customer.last,
    company: customer.company,
    createdAt: new Date(customer.createdAt),
    country: customer.country,
  };
}
