import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode, FilterOperator } from 'primereact/api';

export default function CustomerTable() {
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState(null);

  const onGlobalFilterChange = (e) => {
    console.log(e.target.value)
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
};

useEffect(() => {
  initFilters();
}, []);

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
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
          </span>
      </div>
  );
};

const header = renderHeader();

  const customers = [
    { id: 1, name: 'John Doe', email: 'jon@test.com', phone: '111-111-1111', address: '12,20' },
    { id: 2, name: 'Jane Doe', email: 'jane@tes.com', phone: '222-222-2222', address: '1,-5' },
    { id: 3, name: 'Tom Smith', email: 'tom@test.com', phone: '333-333-3333', address: '0,0' },
    { id: 4, name: 'Jerry Jones', email: 'jerry@test.com', phone: '444-444-4444', address: '5,5' },
  ];

  return (
    <DataTable value={customers} filters={filters} header={header} globalFilterFields={['name', 'email', 'phone', 'address' ]} stripedRows tableStyle={{ minWidth: '50rem' }}>
      <Column field="name" sortable header="Name" />
      <Column field="email" sortable header="Email" />
      <Column field="phone" sortable header="Phone" />
      <Column field="address" sortable header="Address" />
    </DataTable>
  );
}