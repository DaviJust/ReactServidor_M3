import styles from '../components/styles/Sobre.module.css'
import { useState, useEffect } from 'react'
import popcorn from '../images/popcorn.png'
import Titlefaq from '../components/Titlefaq'
import Faq from '../components/Faq'

export default function Sobre(){


    return(
        <>
           <div className={styles.divGlobe}>
               <div className={styles.divSobre}>
                   <h1>Quem somos nós?</h1>
                   <p>O React Flix foi criado com o intuito de ajudar todos os amantes da sétima arte a gerenciar seus filmes favoritos. Basta adicionar o filme e ele será salvo em um banco de dados, de onde você poderá administrar suas informações e deixar suas anotações pessoais.<br />Fácil e prático. <br />Aproveite!</p>
                   <p id={styles.compartilhe}>Compartilhe essa ideia!</p>
               </div>
               <div className={styles.divImage}>
                <img src={popcorn} alt="" />
               </div>
           </div>
           <Titlefaq></Titlefaq>
            <Faq></Faq>
        </>
    )
}