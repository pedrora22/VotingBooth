import React, { Component, useState } from 'react';
import './App.css';
import Screen from './components/Screen';
import Wrapper from './components/Wrapper';

function App() {
  const [vote, setVote] = useState(0);
  const handleClickBtn = (value) => {
    if (Number(vote.toString() + value.toString() < 100)) {
      setVote(Number(vote.toString() + value.toString()))
    }
  }

  const handleCorrige = () => {
    if(vote !== 0) {
      var voteS = vote.toString();
      setVote(Number(voteS.substring(0, voteS.length - 1)))
    }
  } 
  
  const handleConfirma = () => {
    if(vote === 'Branco' || vote === 72 || vote === 62 || vote === 42 || vote === 46 || vote === 45) {
      setVote('Confirma')
    }
  }

  const handleBranco = () => {
    setVote('Branco');
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => handleClickBtn(i)}>{i}</button>
      )
    }
    return digits;
  }

  const showInst = () => {
    if(vote === 72 || vote === 62 || vote === 42 || vote === 46 || vote === 45) {
      return(
          <div>
            <h6>Aperte CONFIRMA para confirmar o seu voto.</h6>
            <h6>Aperte CORRIGE para apagar o último número.</h6>
            <h6>Aperte BRANCO para votar em branco.</h6>
          </div>
      )
    }
  }
  return(
      <Wrapper>
        <div className='screen'>
          {Screen(vote)}
          <div className='num'>{vote}</div>
          {showInst()}
        </div>
        <div className='btns'>
          {createDigits()}
          <button className='btnC' id='branco' onClick={() => handleBranco()}>Branco</button>
          <button className='btnC' id='corrige' onClick={() => handleCorrige()}>Corrige</button>
          <button className='btnC' id='confirma' onClick={() => handleConfirma()}>Confirma</button>
        </div>
      </Wrapper>
  );
}
 
export default App;
