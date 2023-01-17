import style from "../components/styles/Contato.module.css";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

export default function Contato() {
  return (
    <div className={style.divMaster}>
      <div className={style.headerContatos}>
        <h1>Contato</h1>
        <br />
        <h3>Conheça nossa equipe de desenvolvedores!</h3>
        <br />
        <p>Acesse as redes dos desenvolvedores do React Flix para conhecer um pouco mais do seu trabalho.</p>
      </div>
      <div className={style.Cards}>
        <div className={style.Card}>
          <img src="" alt="" />
          <p>Nome: <br />Diego Bernardes</p>
          <p>Função: <br /></p>
          <p>Redes Sociais:</p>
          <ul className={style.redes}>
            <li><AiFillGithub /></li>
            <li><AiFillLinkedin /></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src="" alt="" />
          <p>Nome: <br />Davi Justino</p>
          <p>Função: <br />Pessoa Colaboradora</p>
          <p>Redes Sociais: </p>
          <ul className={style.redes}>
            <li><AiFillGithub /></li>
            <li><AiFillLinkedin /></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src="" alt="" />
          <p>Nome: <br />Breno Ricardo</p>
          <p>Função: <br /> </p>
          <p>Redes Sociais: </p>
          <ul className={style.redes}>
            <li><AiFillGithub /></li>
            <li><AiFillLinkedin /></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src="" alt="" />
          <p>Nome: <br /></p>
          <p>Função: <br /></p>
          <p>Redes Sociais: </p>
          <ul className={style.redes}>
            <li><AiFillGithub /></li>
            <li><AiFillLinkedin /></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src="" alt="" />
          <p>Nome: <br /></p>
          <p>Função: <br /></p>
          <p>Redes Sociais: </p>
          <ul className={style.redes}>
            <li><AiFillGithub /></li>
            <li><AiFillLinkedin /></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src="" alt="" />
          <p>Nome: <br /></p>
          <p>Função: <br /></p>
          <p>Redes Sociais: </p>
          <ul className={style.redes}>
            <li><AiFillGithub /></li>
            <li><AiFillLinkedin /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
