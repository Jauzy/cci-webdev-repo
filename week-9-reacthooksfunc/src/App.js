import React, { useState, useEffect } from 'react';
import './App.css';

import Button from './Components/Button'
import Input from './Components/Input'

function App() {
  //membuat variabel input
  const [input, setInput] = useState('')
  //membuat variabel array to do list
  const [toDo, setToDo] = useState([])
  //fungsi onchange untuk mendeteksi perubahan pada text field
  //lalu mengisi nilai variavel input
  const onChange = e => {
    setInput(e.target.value)
  }
  //fungsi untuk menghandle click pada button
  const onClick = () => {
    //menambahkan nilai input ke array to do list
    setToDo([...toDo, input])
    //reset nilai variabel input
    setInput('')
  }

  //fungsi yang akan di eksekusi saat nilai variabel to do
  //berubah
  useEffect(() => {
    alert('Kamu baru saja menambahkan item baru ke to do list.')
  },[toDo])

  return (
    <div className="App">
      <div className='App-header'>

        {/* Render Array To Do List */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {toDo.map((item, index) => (
            <h2 style={{ margin: '1em' }}>{index + 1}. {item}</h2>
          ))}
        </div>

        <Input value={input} onChange={onChange} />
        <Button label='Tambah' onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
