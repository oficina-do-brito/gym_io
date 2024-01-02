"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import axios from "axios";
import { parseCookies } from "nookies";
import { ContextAuth } from "@/contexts/authContext";
import { Alert } from "@/components/Alert";

interface Idata {
  titulo: string;
  descricao: string;
  autor: string;
}

export default function NoticiasCreate() {
  const [dados, setDados] = useState<Idata>({} as Idata);
  const route = useRouter();
  const { usuarioAuthenticado } = useContext(ContextAuth);

  const handleChangeTitulo = (event: ChangeEvent<HTMLInputElement>) => {
    setDados({ ...dados, titulo: event.target.value });
  };
  const handleChangeAutor = (event: ChangeEvent<HTMLInputElement>) => {
    setDados({ ...dados, autor: event.target.value });
  };
  const handleReturnForm = () => {
    route.push("manager");
  };

  /**
   * @description essa é a função responsavel por criar uma noticia
   * > é Buscado o token dos cookies
   *
   * > é Buscado id do usuario que esta no context de authenticaçÃo
   *
   * > é montado a requisição post  com axios
   *
   * > é enviada a requisição e redirecionado em seguida para pagina de manager
   */
  const handleSumitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    const { app_ginasio_token: token } = parseCookies();
    const options = {
      method: "POST",
      url: `http://localhost:3000/noticias/${usuarioAuthenticado.id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        titulo: dados.titulo,
        descricao: dados.descricao,
        nomeAutor: dados.autor,
      },
    };

    const response = await axios(options)
      .then((response) => response.data)
      .catch(function (error) {
        console.error(error);
      });
    if (response) {
      route.push("/manager");
    }
  };

  return (
    <div className="container-fluid m-0 p-0 d-flex flex-column align-items-center justify-content-center">
      {usuarioAuthenticado?.tipoUsuario !== "admin" ? (
        <Alert message={`Nao é possivel criar uma noticia. Você não é um usuario admin`} />
      ) : null}
      <section id="contact" className="container-fluid gray-bg padding-top-bottom">
        <div className="row">
          <form id="Highlighted-form" className="col-sm-8 col-sm-offset-3" method="POST" action={"/"}>
            <div className="form-group">
              <i className="bi bi-alphabet-uppercase h3 m-3" />
              <label className="control-label" htmlFor="title">
                Titulo
              </label>
              <div className="controls">
                <input
                  id="title"
                  name="titulo"
                  placeholder="Titulo"
                  className="form-control requiredField Highlighted-label"
                  data-new-placeholder="Titulo"
                  type="text"
                  data-error-empty="Please enter your Titulo"
                  onChange={handleChangeTitulo}
                />
              </div>
            </div>

            <div className="form-group">
              <i className="bi bi-chat-dots h5 m-3" />
              <label className="control-label" htmlFor="contact-message">
                Descrição
              </label>
              <div className="controls">
                <textarea
                  id="contact-message"
                  name="descricao"
                  placeholder="Your message"
                  className="form-control requiredField Highlighted-label"
                  data-new-placeholder="Noticia"
                  data-error-empty="Please enter your Noticia"
                  defaultValue={""}
                  value={dados.descricao}
                  rows={6}
                  onChange={(e) => setDados({ ...dados, descricao: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <i className="bi bi-person-circle h5 m-3" />
              <label className="control-label" htmlFor="autor">
                Autor
              </label>
              <div className="controls">
                <input
                  id="autor"
                  name="autor"
                  placeholder="digite seu nome como autor"
                  className="form-control requiredField Highlighted-label"
                  data-new-placeholder="igite seu nome como autor"
                  type="text"
                  data-error-empty="Please digite seu nome como autor"
                  onChange={handleChangeAutor}
                />
              </div>
            </div>
            {usuarioAuthenticado?.tipoUsuario === "admin" ? (
              <button type="submit" className=" btn btn-outline-success my-5" onClick={handleSumitForm}>
                <i className="bi bi-chat-dots h5 m-3" />
                Postar
              </button>
            ) : (
              <button type="submit" className=" btn btn-outline-warning my-5" onClick={handleReturnForm}>
                <i className="bi bi-arrow-return-left h5 m-3" />
                Voltar
              </button>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
