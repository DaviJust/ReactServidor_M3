import { Link } from 'react-router-dom'
import styles from './styles/Header.module.css'
import {BiCameraMovie} from 'react-icons/bi'
import { useState } from 'react'

function Header(){
    return(
        <div className={styles.headerDiv}>
            <Link to='/'>
                <h1 className={styles.text}>{<BiCameraMovie className={styles.iconText}/>} React Flix</h1>
            </Link>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/Filmes'>Filmes</Link>
                <Link to='/Sobre'>Sobre</Link>
                <Link to='/PostarFilme'>Adicionar</Link>
            </ul>

        </div>
    )
}

export default Header
