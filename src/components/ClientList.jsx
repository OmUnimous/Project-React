// ClientList.js
import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { deleteClient, fetchClients } from "../services/ClientServices";
import { useNavigate } from "react-router-dom";

export function ClientList() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const openDialogModal= () =>{
    setShowDialog(true);
  }
  const closeDialogModal= () =>{
    setShowDialog(false);
  }
  useEffect(() => {
    populateClientState();
  }, []);

  async function populateClientState() {
    try {
      const data = await fetchClients();
      setClients(data.customers);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClientDelete = async()=>{
    try {
        await deleteClient(selectedClient);
        populateClientState();
        closeDialogModal();
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
              {clients.map((c) => (
                <tr >
                  
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.dob}</td>
                  <td>{c.contact}</td>
                  <td>{c.address}</td>
                  <td>{c.weight}</td>
                  <td>{c.plan}</td>
                  <td>
                    
                <Button variant="danger" onClick={() => {
                        openDialogModal();
                        setSelectedClient(c.name);
                        }}>Delete</Button> 
                <Button variant="primary" onClick={()=>{
                         navigate(`/edit/${c.name}`)
                             }}>Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No Clients Found...!</p>
        )}
        <Modal show ={showDialog} onHide = {closeDialogModal}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do ypu really want to delete Client?</Modal.Body>
            <Modal.Footer>
                <Button variant = "danger" onClick={()=>{
                    handleClientDelete();
                }}>
                    Yes
                </Button>
                <Button variant="success" onClick={closeDialogModal}>
                        No
                    </Button>
            </Modal.Footer>
        </Modal>
        
      </div>
    </Container>
  );
}
