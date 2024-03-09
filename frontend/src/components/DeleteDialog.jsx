import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function DeleteDialog(props) {
  const { customer, deleteCustomer } = props;
    
  const [visible, setVisible] = useState(false);
  const footerContent = (
    <div>
      <Button label="Não" onClick={() => setVisible(false)} className="p-button-text" />
      <Button label="Sim" onClick={() => deleteCustomer(customer.id)} severity="danger" />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Button label="Apagar" severity="danger" onClick={() => setVisible(true)} />
      <Dialog header="Apagar Cliente" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
        <p className="m-0">
          Tem certeza que deseja apagar o cliente <strong>{customer.name}</strong>?
        </p>
      </Dialog>
    </div>
  )
}
        