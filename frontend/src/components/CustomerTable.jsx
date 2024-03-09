import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import {  getCustomers, updateCustomer, deleteCustomer } from '../services/customerService';
import DeleteDialog from './DeleteDialog';
import CreateCustomerDialog from './CreateCustomerDialog';
import RouteDialog from './RouteDialog';

export default function CustomerTable() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'jon@test.com', phone: '111-111-1111', address: '12,20' },
    { id: 2, name: 'Jane Doe', email: 'jane@tes.com', phone: '222-222-2222', address: '1,-5' },
    { id: 3, name: 'Tom Smith', email: 'tom@test.com', phone: '333-333-3333', address: '0,0' },
    { id: 4, name: 'Jerry Jones', email: 'jerry@test.com', phone: '444-444-4444', address: '5,5' },
  ]);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState(null);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);

  useEffect(() => {
    initFilters();
  }, []);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = (id) => {
    // deleteCustomer(id).then(() => {
    //   setCustomers(customers.filter(c => c.id !== id));
    // });
  };

  const fetchCustomers = () => {
    // getCustomers().then(data => setCustomers(data));
  };

  const onGlobalFilterChange = (e) => {
    console.log(e.target.value)
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
};

const onRowEditComplete = (e) => {
  if (invalidName || invalidEmail || invalidAddress) {
      return;
  }
  let _customers = [...customers];
  let { newData, index } = e;

  _customers[index] = newData;
  console.log(newData);

  setCustomers(_customers);
  // updateCustomer(newData);
};

const textEditor = (options) => {
  return <InputText style={{ width: '200px' }} type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
};

const nameEditor = (options) => {
  const handleChange = (e) => {
    options.editorCallback(e.target.value);
    const newValue = e.target.value;
    let _invalidName = false;

    if (!newValue) {
        _invalidName = true;
    }

    setInvalidName(_invalidName);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <InputText style={{ width: '200px' }} type="text" value={options.value} onChange={handleChange} className={invalidName ? 'p-invalid' : ''} />
      {invalidName && <small className="p-error">Nome é obrigatório.</small>}
    </div>
  );
}

const emailEditor = (options) => {
  const handleChange = (e) => {
    options.editorCallback(e.target.value);
    const newValue = e.target.value;
    let _invalidEmail = false;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!newValue || !emailRegex.test(newValue)) {
        _invalidEmail = true;
    }
    setInvalidEmail(_invalidEmail);
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <InputText style={{ width: '200px' }} type="text" value={options.value} onChange={handleChange} className={invalidEmail ? 'p-invalid' : ''} />
      {invalidEmail && <small className="p-error">Email inválido.</small>}
    </div>
  );
}

const addressEditor = (options) => { 
  const handleChange = (e) => {
    options.editorCallback(e.target.value);
    const newValue = e.target.value;
    let _invalidAddress = false;
    const addressRegex = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
    if (!newValue || !addressRegex.test(newValue)) {
        _invalidAddress = true;
    }
    setInvalidAddress(_invalidAddress);
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <InputText style={{ width: '100px' }} type="text" value={options.value} onChange={handleChange} className={invalidAddress ? 'p-invalid' : ''} />
      {invalidAddress && <small className="p-error">Localização inválida</small>}
    </div>
  );
}

const initFilters = () => {
  setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      email: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      phone: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
      address: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] }
  });
  setGlobalFilterValue('');
};

const renderHeader = () => {
  return (
      <div className="flex justify-content-between">
          <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Pesquisar Cliente" />
          </span>
      </div>
  );
};

const header = renderHeader();

  return (
    <div className='p-7'>
      <div className='mb-5' style={{ display: 'flex', gap: '20px'}}>
        <CreateCustomerDialog fetchCustomers={fetchCustomers} />
        <RouteDialog />
      </div>
      <DataTable
        value={customers}
        filters={filters}
        header={header}
        globalFilterFields={['name', 'email', 'phone', 'address' ]}
        stripedRows
        removableSort
        tableStyle={{ minWidth: '50rem' }}
        editMode="row"
        onRowEditComplete={onRowEditComplete}
        >
        <Column field="name" sortable header="Nome" editor={(options) => nameEditor(options)} />
        <Column field="email" sortable header="Email" editor={(options) => emailEditor(options)} />
        <Column field="phone" sortable header="Telefone" editor={(options) => textEditor(options)} />
        <Column field="address" sortable header="Localização" editor={(options) => addressEditor(options)} />
        <Column header="Editar" rowEditor={true} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>        
        <Column header="Deletar" body={(rowData) => <DeleteDialog customer={rowData} deleteCustomer={deleteCustomer} />} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
      </DataTable>
    </div>
  );
}