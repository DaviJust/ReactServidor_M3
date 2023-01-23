import style from '../components/styles/Home.module.css'
import API from '../axios/Config.jsx'
import { useState, useEffect } from 'react'
import gifLoad from '../images/gif-loading.gif'
import {AiFillEdit} from 'react-icons/ai'
import {BiCommentAdd, BiMoviePlay} from 'react-icons/bi'
import {FaCcMastercard} from 'react-icons/fa'


export default function Home() {

    const [planos, setPlanos] = useState([]);
    useEffect(() => {
        API.get('/planos').then((e) => setPlanos(e.data))
    }, [])

    return (
        <div>
            <div className={style.divHome}>
                <h2>React Flix <br /> <br /> Os filmes do seu coração também tem lugar aqui!</h2>
            </div>
            <section className={style.services}>
                <h2 className='mt-4'>Nossos Serviços</h2>
                <p>Que tal guardar os seus filmes favoritos em um lugar especial?</p>
                <ul>
                    <li><div>
                        <BiMoviePlay className={style.imgService}/>
                        <h3>Adicione</h3>
                        <p>Crie seu próprio catálogo com seus filmes favoritos. Guarde essas experiências num lugar especial!</p>
                    </div></li>
                    <li><div>
                        <AiFillEdit className={style.imgService}/>
                        <h3>Edite</h3>
                        <p>Edite as informações de cada filme com sinopse, direção, ano, duração, avaliação e uma imagem para a capa.</p>
                    </div></li>
                    <li><div>
                        <BiCommentAdd className={style.imgService}/>
                        <h3>Comente</h3>
                        <p>Deixe um comentário sobre o filme, com sua opinião pessoal. Diga o que sentiu ao assistí-lo.</p>
                    </div></li>
                    <li><div>
                        <FaCcMastercard className={style.imgService}/>
                        <h3>Assine</h3>
                        <p>Assine um dos nossos planos de assinatura e concorra a brindes.</p>
                    </div></li>
                </ul>


            </section>
            <div className={style.planos}>
                <h3 className='mt-5'>Planos de Assinatura</h3>
                <p>Conheça nossos planos de assinatura e escolha a melhor opção para você.</p>
                <section className={style.sectionPlanos}>
                    {planos.length === 0 ? (<img src={gifLoad} width={400} height={270} alt='Loading do Conteúdo' />): (planos.map(e => (
                    <div>
                        <h3>{e.plano}</h3>
                        <br />
                        <ul>
                            <li>{e.descrição}</li>
                            <li>{e.armazenamento}</li>
                            <li>{e.vantagens}</li>
                            <li>{e.descontos}</li>
                            <li>{e.valor}</li>
                        </ul>
                    </div>)))}
                </section>
            </div>
        </div>
    )
}