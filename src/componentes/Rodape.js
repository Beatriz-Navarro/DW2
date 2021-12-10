import React from 'react'

const Rodape = props => {
    return(
        <footer className='container-fluid text-center'>
                <a href='#myPage' title='To Top'>
                    <span className='glyphicon glyphicon-chevron-up'></span>
                </a>
                <p>Site criado por Beatriz Navarro e Bruna Cristina</p>
                <p><a href='https://github.com/Beatriz-Navarro' title='GitHub Bea'>GitHub Beatriz</a></p>
                <p><a href='https://github.com/brunacristinass' title='GitHub Bru'>GitHub Bruna</a></p>
        </footer>
    )
}

export default Rodape