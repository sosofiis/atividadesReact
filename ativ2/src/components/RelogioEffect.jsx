import React, { useState, useEffect } from 'react';

const RelogioEffect = () => {
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [mensagem, setMensagem] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    setMensagem(true);
    const tempoFinal = setTimeout(() => {
      setMensagem(false);
    }, 5000);

    return () => clearTimeout(tempoFinal);
  }, []);

  return (
    <div>
      <h1>{horaAtual.toLocaleTimeString()}</h1>
      {mensagem && <p>Olha a hora!</p>}
    </div>
  );
};

export default RelogioEffect;
