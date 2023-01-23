import style from "../components/styles/Contato.module.css";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Lucas from '../images/perfis/lucas.jpg'
import Otavio from '../images/perfis/otavio.jpg'
import Diego from '../images/perfis/diego.jpg'
import Joao from '../images/perfis/joao.jpg'
import Breno from '../images/perfis/breno.jpg'
import Davi from '../images/perfis/davi.jpg'

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
          <img src={Breno} alt="" />
          <p>Breno Ricardo</p>
          <p>Gestor de Conflitos</p>
          <ul className={style.redes}>
            <li><a href="https://github.com/BrenoRicardo" target='_blank'><AiFillGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/breno-ricardo-33425a222/" target='_blank'><AiFillLinkedin /></a></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src={Davi} alt="" />
          <p>Davi Justino</p>
          <p>Colaborador III</p>
          <ul className={style.redes}>
            <li><a href="https://github.com/DaviJust" target='_blank'><AiFillGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/davi-justino-marques-couto-ti44010/" target='_blank'><AiFillLinkedin /></a></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src={Diego} alt="" />
          <p>Diego Bernardes</p>
          <p>Co-Facilitador</p>
          <ul className={style.redes}>
            <li><a href="https://github.com/DiegoBernardes95" target='_blank'><AiFillGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/diegobernardes-webdev/" target='_blank'><AiFillLinkedin /></a></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src={Joao} alt="" />
          <p>João Pedro Guimarães</p>
          <p>Colaborador I</p>
          <ul className={style.redes}>
            <li><a href="https://github.com/JoaoOcho" target='_blank'><AiFillGithub /></a></li>
            <li><a href=" https://www.linkedin.com/in/jo%C3%A3o-pedro-guimar%C3%A3es-ochotorena-b0186a252" target='_blank'><AiFillLinkedin /></a></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src={Lucas} alt="" />
          <p>Lucas Lopes</p>
          <p>Colaborador II</p>
          <ul className={style.redes}>
            <li><a href="https://github.com/LucasLopesPrograms" target='_blank'><AiFillGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/lucas-lopes-672348a1/" target='_blank'><AiFillLinkedin /></a></li>
          </ul>
        </div>
        <div className={style.Card}>
          <img src={Otavio} alt="" />
          <p>Otávio Augusto</p>
          <p>Gestor de Conhecimento</p>
          <ul className={style.redes}>
            <li><a href="https://github.com/Hoptavio" target='_blank'><AiFillGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/otavio-augusto-teixeira-xavier-da-silva-4b74a924b/" target='_blank'><AiFillLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
