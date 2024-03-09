
import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getCustomersShortestRoute } from '../services/customerService';

export default function RouteDialog() {
  const [visible, setVisible] = useState(false);

  const [customers, setCustomers] = useState([
    { order: 1, name: 'John Doe', email: 'jon@test.com', phone: '111-111-1111', address: '12,20' },
    { order: 2, name: 'Jane Doe', email: 'jane@test.com', phone: '222-222-2222', address: '1,-5' },
    { order: 3, name: 'Tom Smith', email: 'tom@test.com', phone: '333-333-3333', address: '0,0' },
    { order: 4, name: 'Jerry Jones', email: 'jerry@test.com', phone: '444-444-4444', address: '5,5' },
    ]);

	useEffect(() => {						
			// getCustomersShortestRoute().then(data => setCustomers(data));
	}, []);						

  return (
    <div className="card flex justify-content-center">
      <Button label="Mostrar Menor Rota" onClick={() => setVisible(true)} />
      <Dialog header="Rota mais rápida para visitar todos os clientes" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <DataTable stripedRows value={customers}>
          <Column field="order" header="Order" />
          <Column field="name" header="Name" />
          <Column field="email" header="Email" />
          <Column field="phone" header="Phone" />
          <Column field="address" header="Address" />
        </DataTable>
      </Dialog>
    </div>
  )
}