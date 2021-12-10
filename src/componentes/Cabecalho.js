import React from 'react'
import { Link } from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div>
            <div class='jumbotron text-center'>
                <h1>Company</h1>
                <p>We specialize in blablabla</p>
                <form>
                    <div class='input-group'>
                        <input type='email' class='form-control' size='50' placeholder='Email Address' required />
                        <div class='input-group-btn'>
                            <button type='button' class='btn btn-danger'>Subscribe</button>
                        </div>
                    </div>
                </form>
    </div>
            <nav class='navbar navbar-default navbar-fixed-top'>
                <div class='container'>
                    <div class='navbar-header'>
                        <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span class='icon-bar'></span>
                            <span class='icon-bar'></span>
                            <span class='icon-bar'></span>
                        </button>
                        <Link class='navbar-brand' to='/'>Logo</Link>
                    </div>
                    <div class='collapse navbar-collapse' id='myNavbar'>
                        <ul class='nav navbar-nav navbar-right'>
                            <li><Link to='/' >Home</Link></li>
                            <li><Link to='/cardapio'>Cardapio</Link></li>
                            <li><Link to='/eventos'>Nossos Eventos</Link></li>
                            <li><Link to='/unidades'>Unidades</Link></li>
                            <li><Link to='/contato'>Fale Conosco</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
    )
}

export default Cabecalho
