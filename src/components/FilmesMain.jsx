import styles from './styles/Filmes.module.css'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import './styles/Modal.css'
import API from '../axios/Config';
Modal.setAppElement("#root");


export default function FilmesMain({ imagem, titulo, ano, direção, duração, avaliação, sinopse, id, comments }) {

    // Modal para exibir informações
    const [modalAberto, setModalAberto] = useState(false);
    function modalOpen() {
        setModalAberto(true);
    }
    function modalClosed() {
        setModalAberto(false);
    }

    // Modal para editar informações
    const [modalEditar, setModalEditar] = useState(false);
    function modalEditarOpen() {
        setModalEditar(true);
    }
    function modalEditarClosed() {
        setModalEditar(false);
    }

    // Função para edição de filmes
    const [edTitulo, setEdTitulo] = useState(titulo)
    const [edAno, setEdAno] = useState(ano)
    const [edDirecao, setEdDirecao] = useState(direção)
    const [edDuracao, setEdDuracao] = useState(duração)
    const [edAvaliacao, setEdAvaliacao] = useState(avaliação)
    const [edSinopse, setEdSinopse] = useState(sinopse)
    const [edImagem, setEdImagem] = useState(imagem)

    const edicao = async (e) => {
        e.preventDefault();
        await API.patch(`/filmes/${id}`, {
            titulo: edTitulo,
            ano: edAno,
            direção: edDirecao,
            duração: edDuracao,
            avaliação: edAvaliacao,
            sinopse: edSinopse,
            imagem: edImagem
        });
        setTimeout(() => {
            window.location.reload(1);
        }, 500);
    }

    $(document).ready(() => {
        $('#yearEd').mask('0000'),
        $('#durationEd').mask('0h00m'),
        $('#avaliationEd').mask('00/100')
    })

    // Função para excluir filmes
    const [modalDelete, setModalDelete] = useState(false);
    function deleteModalAberto() {
        setModalDelete(true);
    }
    function deleteModalFechado() {
        setModalDelete(false);
    }

    const excluirFilme = () => {
        API.delete(`/filmes/${id}`);
        setTimeout(() => {
            window.location.reload(1);
        }, 500);
    }

    // Função para os comentários
    const [comentario, setComentario] = useState(comments)
    const postComentario = async(e) => {
        e.preventDefault();
        await API.patch(`/filmes/${id}`, {                               
            comentarios: comentario
        });
    }

    const [getComentario, setGetComentario] = useState(comments)
    const getComment = () => {
        setGetComentario(comentario);
    }

    return (
        <>
            <p className={styles.paraMap}>
                <img src={imagem} width={240} height={320} alt="Poster do Filme" /> <br /> <br />
                <strong>Titulo</strong>: {titulo} <br />
                <strong>Ano</strong>: {ano} <br />
                <strong>Direção</strong>: {direção} <br />
                <strong>Duração</strong>: {duração} <br />
                <strong>Avaliação</strong>: {avaliação} <br /> <br />

                {/* MODAL PARA EXIBIR INFORMAÇÕES */}
                <div className="container-modal">
                    <button className='btn btn-warning btn-sm' onClick={modalOpen}>Sinopse</button>

                    {/* MODAL PARA EDITAR INFORMAÇÕES */}
                    <div>
                        <button className='btn btn-success btn-sm ms-1' onClick={modalEditarOpen}>Editar</button>
                        <Modal
                            isOpen={modalEditar}
                            onRequestClose={modalEditarClosed}
                            contentLabel="Example Modal"
                            overlayClassName="modal-overlay"
                            className="modal-content"
                        >

                            <form className='modalEditar' onSubmit={edicao}>
                                <h1 className='text-center mb-3'>Editar "{titulo}"</h1>
                                <label htmlFor="nameEd">Titulo do Filme:</label>
                                <input type="text" name='nameEd' placeholder='Nome do filme...' required value={edTitulo} onChange={(e) => setEdTitulo(e.target.value)} />
                                <label htmlFor="directorEd">Direção:</label>
                                <input type="text" name='directorEd' placeholder='Filme dirigido por...' required value={edDirecao} onChange={(e) => setEdDirecao(e.target.value)} />
                                <div className='divEditFilmes'>
                                    <label htmlFor="ano">Ano:</label>
                                    <input type="number" name='ano' placeholder='ano' min={1900} max={2023} id='yearEd' required value={edAno} onChange={(e) => setEdAno(e.target.value)} />
                                    <label htmlFor="duração">Duração:</label>
                                    <input type="text" name='duração' id='durationEd' placeholder='0h00m' required value={edDuracao} onChange={(e) => setEdDuracao(e.target.value)} />
                                    <label htmlFor="avaliação">Avaliação:</label>
                                    <input type="text" name='avaliação' id='avaliationEd' placeholder='00/100' required value={edAvaliacao} onChange={(e) => setEdAvaliacao(e.target.value)} />
                                </div>
                                <label htmlFor="imagem">Imagem:</label>
                                <input type="text" name='imagem' value={edImagem} placeholder='Insira a URL da imagem' onChange={(e) => setEdImagem(e.target.value)}/>
                                <label htmlFor="sinopse">Sinopse:</label>
                                <textarea name="sinopse" placeholder='Insira a sinopse do filme...' value={edSinopse} required onChange={(e) => setEdSinopse(e.target.value)}></textarea>
                                <div className='w-100 text-center mt-3'>
                                    <button type='submit' className='btn btn-success me-2'>Salvar</button>
                                    <button className='btn btn-danger text-center' onClick={modalEditarClosed}>Fechar</button>
                            </div>
                            </form>

                        </Modal>
                    </div>

                    {/* FIM DO MODAL PARA EDITAR INFORMAÇÕES */}

                    {/* Modal para excluir filme */}
                    <button className='btn btn-danger btn-sm ms-1' onClick={deleteModalAberto}>Excluir</button>
                    <Modal
                        isOpen={modalDelete}
                        onRequestClose={deleteModalFechado}
                        contentLabel='Example Modal'
                        overlayClassName='modal-overlay'
                        className='modalExcluir'
                    >
                        <div className='divModalExcluir'>
                            <p><strong>Excluir "{titulo}"?</strong></p>
                            <img src={imagem} alt="" width={150} height={200} />
                            <div>
                                <button className='btn btn-danger w-25 me-2' onClick={excluirFilme}>Sim</button>
                                <button className='btn btn-warning w-25' onClick={deleteModalFechado}>Não</button>
                            </div>
                        </div>
                    </Modal>


                    {/* CONTINUAÇÃO DO MODAL PARA EXIBIR INFORMAÇÕES */}
                    <Modal
                        isOpen={modalAberto}
                        onRequestClose={modalClosed}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <h1 className='text-center mb-4' >{titulo}</h1>
                        <div className='infosModal'>
                            <img className='mt-4 ms-3' src={imagem} width={260} height={370} alt="" />
                            <div className='paragraphModal'>
                                <p>{sinopse}</p>
                                <hr /> 
                                <h3>Comentário Pessoal:</h3>
                                <p><em>{getComentario}</em></p>
                                <form className='formComments' onSubmit={postComentario}>
                                    <textarea required onChange={e => setComentario(e.target.value)}/>
                                    <br />
                                    <button type='submit' className='btn btn-success btn-sm mt-2 mb-2' onClick={getComment}>Comentar</button>
                                </form>
                            </div>
                        </div>

                        <div className='w-100 text-center'><button className='btnModal btn btn-warning text-center' onClick={modalClosed}>Fechar</button></div>
                    </Modal>
                </div>
            </p>
        </>
    )
}