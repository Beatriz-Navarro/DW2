import React, { Component } from 'react'
import {Route, Routes} from 'react-router-dom'

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Home from './componentes/Home'
import Cardapio from './componentes/Cardapio'
import Eventos from './componentes/Eventos'
import Unidades from './componentes/Unidades'
import Contato from './componentes/Contato'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/cardapio' element={<Cardapio/>}/>
          <Route path='/eventos' element={<Eventos/>}/>
          <Route path='/precos' element={<Unidades/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
        <Rodape />
      </div>
    );
  }
}

export default App;