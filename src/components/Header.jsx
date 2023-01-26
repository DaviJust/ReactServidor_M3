import { Link } from 'react-router-dom'
import styles from './styles/Header.module.css'
import { BiCameraMovie } from 'react-icons/bi'
import { MdAddBox } from 'react-icons/md'

function Header() {
    const loginUser = 'admin';
    const loginPassword = 'admin';

    return (
        <div className={styles.headerDiv}>
            <Link to='/'>
                <h1 className={styles.text}>{<BiCameraMovie className={styles.iconText} />} React Flix</h1>
            </Link>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/Filmes'>Filmes</Link>
                <Link to='/Sobre'>Sobre</Link>
                <Link to='/Contato'>Contato</Link>
                {loginUser == sessionStorage.usuario && loginPassword == sessionStorage.senha ? <Link to='/PostarFilme'><MdAddBox className={styles.moreMovie}/></Link> : null}
                {loginUser == sessionStorage.usuario && loginPassword == sessionStorage.senha ? <Link to='/Login' className={styles.login}>Admin</Link> : <Link to='/Login' className={styles.login}>Login</Link>}
            </ul>

        </div>
    )
}

export default Header
