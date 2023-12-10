// ClientList.js
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchClients } from "../services/ClientServices";

export function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    populateClientState();
  }, []);

  async function populateClientState() {
    try {
      const data = await fetchClients();
      setClients(data.customers);
      console.log(data.customers); // Log the customers array from the fetched data
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <div>
        {clients && clients.length !== 0 ? (
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Weight</th>
                <th>Package</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((customer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.dob}</td>
                  <td>{customer.contact}</td>
                  <td>{customer.address}</td>
                  <td>{customer.weight}</td>
                  <td>{customer.plan}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No Clients Found...!</p>
        )}
      </div>
    </Container>
  );
}
