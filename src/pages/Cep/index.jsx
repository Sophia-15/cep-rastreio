import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import endereco from '../../assets/img/endereco.svg';
import Input from '../../components/Input';
import './styles.scss'; 

function Cep() {
  const [cep, setCep] = useState('');
  const [cep1, setCep1] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');
  const [ddd, setDdd] = useState('');

  async function getData() {
    const api = `https://viacep.com.br/ws/${cep}/json/`;

    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    };

    const results = await fetch(api, options);
    const data = await results.json();
    console.log(data);
    setLogradouro(data.logradouro);
    setBairro(data.bairro);
    setLocalidade(data.localidade);
    setUf(data.uf);
    setDdd(data.ddd);
    setCep1(data.cep);
  }

  return (
    <>
      <Navbar />
      <main className="cep-main">
        <section id="illustration">
          <img src={endereco} alt="Endereço" />
        </section>
        <section id="cep-info">
          <Input
            onChange={(e) => {
              setCep(e.target.value);
            }}
            onClick={getData}
            placeholder="Digite seu CEP"
          />
          <ul>
            <li>
              <strong>CEP:</strong> {cep1}
            </li>
            <li>
              <strong>Logradouro:</strong> {logradouro}
            </li>
            <li>
              <strong>Bairro:</strong> {bairro}
            </li>
            <li>
              <strong>Localidade: </strong> {localidade}
            </li>
            <li>
              <strong>UF:</strong> {uf}
            </li>
            <li>
              <strong>DDD:</strong> {ddd}
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Cep;
