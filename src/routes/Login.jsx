import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../axios/Config";
import "../components/styles/login.css";

export default function Cadastro() {
  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  const navigate = useNavigate();  
  const [ListaUsuarios, setListaUsuarios] = useState([]);
  useEffect(() => {
    API.get("/Usuarios").then((e) => setListaUsuarios(e.data));
  }, []);

  function UsuarioHandle(e) {
    setUsuario(e.target.value);
  }

  function SenhaHandle(e) {
    setSenha(e.target.value);
  }

  function validarUsuario() {
    let e = ListaUsuarios.find(
      (usuario) => usuario.usuario === Usuario && usuario.senha === Senha
    );
    if (e === undefined) {
      alert("Conta não existe.");
    } else {
      localStorage.setItem( 'logado','true' );
      navigate('/Filmes')
    }
  }

  return (
    <div class="espaco">
      <form>
        <div class="form-group">
          <label for="inputUsuario"></label>
          <input
            onChange={(e) => UsuarioHandle(e)}
            value={Usuario}
            type="text"
            class="form-control"
            id="inputUsuario"
            placeholder="Usuario"
          />
        </div>
        <div class="form-group">
          <label for="idSenha"></label>
          <input
            onChange={(e) => SenhaHandle(e)}
            value={Senha}
            type="password"
            class="form-control"
            id="idSenha"
            placeholder="Senha"
          />
        </div>
        <button type="button" onClick={validarUsuario} class="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}
