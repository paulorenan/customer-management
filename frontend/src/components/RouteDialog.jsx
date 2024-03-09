
import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getCustomersShortestRoute } from '../services/customerService';

export default function RouteDialog() {
  const [visible, setVisible] = useState(false);

  const [customers, setCustomers] = useState([]);

	useEffect(() => {						
			getCustomersShortestRoute().then(data => setCustomers(data));
	}, []);			
  
  const fetchShortestRoute = () => {
    getCustomersShortestRoute().then(data => setCustomers(data));
    setVisible(true);
  }

  return (
    <div className="card flex justify-content-center">
      <Button label="Mostrar Menor Rota" onClick={() => fetchShortestRoute()} />
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