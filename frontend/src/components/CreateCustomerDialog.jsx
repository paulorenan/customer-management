import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import { createCustomer } from '../services/customerService';


export default function CreateCustomerDialog(props) {
    const { fetchCustomers, toast } = props;

    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidAddress, setInvalidAddress] = useState(false);
    const [loading, setLoading] = useState(false);

    const footerContent = (
        <div>
            <Button label="Cancelar" onClick={() => onCancel()} className="p-button-text" />
            <Button label="Salvar" loading={loading} onClick={() => saveCustomer()} />
        </div>
    );

    const saveCustomer = async () => {
        if (name === '') {
            setInvalidName(true);
            return;
        }
        if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
            setInvalidEmail(true);
            return;
        }
        if (address === '' || !/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(address)) {
            setInvalidAddress(true);
            return;
        }
        setLoading(true);
        createCustomer({ name, email, phone, address }).then(() => {
            fetchCustomers();
            onCancel();
            toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Cliente criado com sucesso', life: 5000 });
        }).finally(() => setLoading(false));
    };

    const onNameChange = (e) => {
        let _invalidName = false;
        if (!e.target.value) {
            _invalidName = true;
        }
        setInvalidName(_invalidName);
        setName(e.target.value);
    }

    const onEmailChange = (e) => {
        let _invalidEmail = false;
        if (!e.target.value || !/\S+@\S+\.\S+/.test(e.target.value)) {
            _invalidEmail = true;
        }
        setInvalidEmail(_invalidEmail);
        setEmail(e.target.value);
    }

    const onAddressChange = (e) => {
        let _invalidAddress = false;
        if (!e.target.value || !/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(e.target.value)) {
            _invalidAddress = true;
        }
        setInvalidAddress(_invalidAddress);
        setAddress(e.target.value);
    }

    const onCancel = () => {
        setVisible(false);
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setInvalidAddress(false);
        setInvalidEmail(false);
        setInvalidName(false);
    }

    return (
        <div className="card flex justify-content-center">
            <Button label="Novo Cliente" onClick={() => setVisible(true)} />
            <Dialog header="Novo Cliente" visible={visible} style={{ width: '20vw' }} onHide={() => onCancel()} footer={footerContent}>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="mb-3" >
                        <label htmlFor="name">Nome</label>
                        <InputText id="name" type="text" value={name} onChange={(e) => onNameChange(e)} className={invalidName ? 'p-invalid' : ''} />
                        {invalidName && <small className="p-error">Nome é obrigatório.</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <InputText id="email" type="text" value={email} onChange={(e) => onEmailChange(e)} className={invalidEmail ? 'p-invalid' : ''} />
                        {invalidEmail && <small className="p-error">Email inválido.</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Telefone</label>
                        <InputText id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                        <label htmlFor="address">Localização</label>
                    <div className="mb-3">
                        <InputText id="address" type="text" value={address} onChange={(e) => onAddressChange(e)} className={invalidAddress ? 'p-invalid' : ''} />
                        {invalidAddress && <small className="p-error">Localização inválida</small>}
                    </div>
                </div>
            </Dialog>
        </div>
    )
}