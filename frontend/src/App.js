import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import CustomerTable from './components/CustomerTable';

import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <header className="App-header">
          <CustomerTable />
        </header>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
