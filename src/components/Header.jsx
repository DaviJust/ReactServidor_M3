import { Link } from 'react-router-dom'
import styles from './styles/Header.module.css'
import {BiCameraMovie} from 'react-icons/bi'
import { useState } from 'react'

function Header(){
    let loginOn = localStorage.getItem('logado');
    return(
        <div className={styles.headerDiv}>
            <Link to='/'>
                <h1 className={styles.text}>{<BiCameraMovie className={styles.iconText}/>} React Flix</h1>
            </Link>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/Filmes'>Filmes</Link>
                <Link to='/Sobre'>Sobre</Link>
                <Link to='/Contato'>Contato</Link>
                <Link to='/Login' className={styles.login}>Login</Link>
                
                {/* <Link to='/PostFilme'>Adicionar</Link> */}
                
            </ul>

        </div>
    )
}

export default Header
