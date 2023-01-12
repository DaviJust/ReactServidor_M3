import styles from './styles/Footer.module.css'
import { Link } from 'react-router-dom'
import {BiCameraMovie, BiColorFill} from 'react-icons/bi'
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from 'react-icons/ai'

export default function Footer() {
    return (
        <div className={styles.divFooter}>
            <div>
                <Link to='/'>
                    <h1>{<BiCameraMovie className={styles.iconText}/>} React Flix</h1>
                </Link>
            </div>
            <div>
                <h3>Contato</h3>
                <ul className={styles.listUl}>
                <li><Link to='/Sobre'><a>Perguntas Frequentes</a></Link></li> 
                    <li>SAC</li>
                    <li>Contato</li>
                    <li>Equipe</li>
                </ul>
            </div>
            <div>
                <h3>Redes</h3>
                <ul className={styles.listUl}>
                    <li>{<AiFillFacebook />} Facebook</li>
                    <li>{<AiFillInstagram />} Instagram</li>
                    <li>{<AiFillTwitterSquare />} Twitter</li>
                </ul>
            </div>


        </div>
    )
}