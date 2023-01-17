import style from '../components/styles/Home.module.css'
import API from '../axios/Config.jsx'
import { useState, useEffect } from 'react'
import gifLoad from '../images/gif-loading.gif'

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
            <div className={style.planos}>
                <h3 className='mt-5'>Planos de Assinatura</h3>
                <p>Conheça nossos planos de assinatura e escolha a melhor opção para você.</p>
                <section className={style.sectionPlanos}>
                    {planos.length === 0 ? (<img src={gifLoad} width={400} height={270} alt='Loading do Conteúdo' />): (planos.map(e => (<div><h3>{e.plano}</h3><br /><ul><li>{e.descrição}</li></ul></div>)))}
                </section>
            </div>
        </div>
    )
}