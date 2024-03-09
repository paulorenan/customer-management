import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import CustomerTable from './components/CustomerTable';


import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {
  return (
    <PrimeReactProvider>
      <div>
        <h1 className='ml-4'>Gerenciamento de Clientes</h1>
        <CustomerTable />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
