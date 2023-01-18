import FilmesMain from '../components/FilmesMain.jsx'
import API from '../axios/Config.jsx'
import styles from '../components/styles/Filmes.module.css'
import { useState, useEffect } from 'react'
import gifLoad from '../images/gif-loading.gif' 
import { Link } from 'react-router-dom'

export default function Filmes() {

    // Função para mostrar filmes
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        API.get('/filmes')
        .then((e) => setMovie(e.data))
    }, [])
    
    
    return (
        <div className={styles.divMain}>
            <div className={styles.divText}>
                <h1>O lugar especial dos seus filmes favoritos!</h1>
                <h2>Adicione filmes e edite suas informações.</h2>
                <h3>Gerencie suas melhores experiências em qualquer lugar.</h3>
                <p>Confira abaixo alguns títulos salvos no React Flix:</p>
            </div>
            <section className={styles.paraApi}>
                {movie.length === 0 ? (<img src={gifLoad} width={400} height={270} alt='Loading do Conteúdo' />) : (movie.map((e) => (<FilmesMain id={e.id} imagem={e.imagem} titulo={e.titulo} ano={e.ano} direção={e.direção} duração={e.duração} avaliação={e.avaliação} sinopse={e.sinopse} comments={e.comentarios} />)))}
            </section>
            <div className={styles.textFooter}>
                <h1>Bom demais, né?</h1>
                <h3>Cadastre-se e tenha acesso a ferramentas exclusivas.</h3>
                <Link className='btn btn-success' to='/Login'> Login </Link>
            </div>

        </div>
    )
}