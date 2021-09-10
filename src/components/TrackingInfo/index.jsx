import React, { useState } from 'react';
import Input from '../../components/Input';
import './styles.scss';

function TrackingInfo() {
  const [code, setCode] = useState('');
  const [data, setData] = useState([]);

  async function getTrackData() {
    const url = `https://api.rastrearpedidos.com.br/api/rastreio/v1?codigo=${code}`;

    const options = {
      method: 'get',
      mode: 'cors',
      cache: 'default',
    };

    const response = await fetch(url, options);
    const results = await response.json();

    console.log(results);
    setData(results);
  }

  return (
    <main>
      <div className="tracking-input">
        <Input
          placeholder="Código de rastreamento"
          onChange={(e) => {
            setCode(e.target.value);
          }}
          onClick={getTrackData}
        />
      </div>

      {data.map((info) => {
        const hora = info.dataHora.split(' ');

        return (
          <>
            <div className="tracking-container">
              <div className="tracking-info">
                <span>Data: {info.data}</span>
                <span>Hora: {hora[1]}</span>
                <span>
                  Local:{' '}
                  {info.uf ? `${info.cidade}/${info.uf}` : `${info.cidade}`}
                </span>
              </div>
              <div className="tracking-status">
                <span>{info.descricao}</span>
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
}

export default TrackingInfo;
