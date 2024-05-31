import { useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [formRegister, setFormRegister] = useState({ nombre: '', valor: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const registrar = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/datos/crear', formRegister);
      console.log(response.data);
      if (response.status === 200) {
        alert('Se registró');
      }
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer"> {/* Adicionado rel="noopener noreferrer" para seguridad */}
          <img src={viteLogo} className="logo" alt="Logo de Vite" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer"> {/* Adicionado rel="noopener noreferrer" para seguridad */}
          <img src={reactLogo} className="logo react" alt="Logo de React" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form onSubmit={registrar}>
          <input type="text" name="nombre" onChange={handleInputChange} value={formRegister.nombre} />
          <br />
          <input type="number" name="valor" onChange={handleInputChange} value={formRegister.valor} />
          <br />
          <button type="submit">Registrar</button>
        </form>
      </div>
    </>
  );
}

export default App;
