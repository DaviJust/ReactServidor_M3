import { useState, useEffect } from "react"
import API from "../axios/Config"
import styles from '../components/styles/PostFilme.module.css'


export default function PostFilme() {

    // Postar um filme na API
    const [titulo, setTitulo] = useState();
    const [direção, setDireção] = useState();
    const [ano, setAno] = useState();
    const [duração, setDuração] = useState();
    const [avaliação, setAvaliação] = useState();
    const [sinopse, setSinopse] = useState();
    const [imagem, setImagem] = useState();

    const postAPI = async (e) => {
        e.preventDefault();
        await API.post('/filmes', {
            titulo: titulo,
            ano: ano,
            direção: direção,
            duração: duração,
            avaliação: avaliação,
            imagem: imagem,
            sinopse: sinopse
        });
        setTimeout(() => {
            window.location.href = '/Filmes';
        }, 500)
    };

    $(document).ready(() => {
        $('#year').mask('0000'),
        $('#duration').mask('0h00m'),
        $('#avaliation').mask('00/100')
    })


    return (
        <div className={styles.divPostFilme}>
            <form className={styles.formPostFilme} id='formPost' onSubmit={postAPI}>
                <h1 className="text-center mb-5">Adicionar um filme:</h1>
                <label htmlFor="nome">Titulo do Filme:</label>
                <input type="text" name="nome" required placeholder="Nome do filme" onChange={e => setTitulo(e.target.value)} />

                <label htmlFor="director">Direção:</label>
                <input type="text" name="director" required placeholder="Filme dirigido por..." onChange={e => setDireção(e.target.value)} />

                <div className={styles.divFormPost}>
                    <label htmlFor="year">Ano:</label>
                    <input type="text" name="year" id="year" required placeholder="0000" onChange={e => setAno(e.target.value)} />
                    <label htmlFor="duration">Duração:</label>
                    <input type="text" name="duration" id="duration" required placeholder="0h00m" onChange={e => setDuração(e.target.value)} />
                    <label htmlFor="avaliation">Avaliação:</label>
                    <input type="text" name="avaliation" placeholder="00/100" required id="avaliation" onChange={e => setAvaliação(e.target.value)} />
                </div>

                <label htmlFor="image">Imagem:</label>
                <input type="text" name="image" placeholder="Insira a URL da imagem" onChange={e => setImagem(e.target.value)} />

                <label htmlFor="sinopse">Sinopse:</label>
                <textarea name="sinopse" placeholder="Digite aqui a sinopse do filme..." required onChange={e => setSinopse(e.target.value)}></textarea>

                <div className="text-center">
                    <button type="submit" className="btn btn-warning">Postar</button>
                </div>
            </form>

        </div>
    )
}