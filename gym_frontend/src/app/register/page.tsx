"use client";
import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import Styles from "./register.module.css";
import Image from "next/image";
import { ContextAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { RequestPostWithoutCredential } from "@/shared/axios/requests";

interface IUsuario {
  nome: string;
  email: string;
  password: string;
  status: string;
  dataNascimento: Date;
  tipoUsuario: string;
}

export default function Register() {
  const [usuario, setUsuario] = useState<IUsuario>({} as IUsuario);
  const auth = useContext(ContextAuth);
  const route = useRouter();

  const handleInputNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, nome: event.target.value });
  };
  const handleInputEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, email: event.target.value });
  };
  const handleInputPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, password: event.target.value });
  };
  const handleInputStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, status: event.target.value });
  };
  const handleInputDataNascimentoChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const data = new Date(event.target.value);
    setUsuario({ ...usuario, dataNascimento: data });
  };
  const handleInputTipoUsuarioChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setUsuario({ ...usuario, tipoUsuario: event.target.value });
  };

  /**
   * @description Essa função cadastra chama o backend e cadastra no banco.
   * > * Recebe dados do usuario e manda pro cadastro;
   * 
   * > * Se retornado algo do cadastro somos obrigado a authenticarr o usuario então authenticamos e só depois direcionamos para o manger;
   * 
   */
  const handleSumitRegister = async (event: SyntheticEvent) => {
    event.preventDefault();
    const resposta = await RequestPostWithoutCredential("usuarios", usuario);
    if (resposta) {
      const redirecionah = await auth.singIn(usuario.email, usuario.password);
      redirecionah ? route.replace("/manager") : null;
    }
  };

  return (
    <>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className={`${Styles.card} ${Styles.card0} b-0`}>
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className={`pb-5`}>
                <div className="row px-3 justify-content-center mt-4 mb-5 borderLine">
                  <Image
                    src="/assets/images/background.png"
                    width={560}
                    height={368}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${Styles.card2} ${Styles.card} b-0 px-4 py-5`}>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Nome</h6>
                  </label>
                  <input
                    className="mb-4"
                    type="text"
                    name="nome"
                    placeholder="Enter your name"
                    onChange={handleInputNomeChange}
                  />
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label>
                  <input
                    className="mb-4"
                    type="text"
                    name="email"
                    placeholder="Enter a valid email address"
                    onChange={handleInputEmailChange}
                  />
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className={`mb-0 ${Styles.textSm}`}>Password</h6>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={handleInputPasswordChange}
                  />
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Status</h6>
                  </label>
                  <input
                    className="mb-4"
                    type="text"
                    name="status"
                    placeholder="Enter your name"
                    onChange={handleInputStatusChange}
                  />
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Data de Nascimento</h6>
                  </label>
                  <input
                    className="mb-4"
                    type="date"
                    name="data"
                    placeholder="Enter your name"
                    onChange={handleInputDataNascimentoChange}
                  />
                </div>

                <div className="input-group mb-3">
                  <label className="form-label" htmlFor="tipoUsuario">
                    Pretende se cadastrar como: &nbsp; &nbsp;
                  </label>
                  <select
                    className="form-label"
                    id="tipoUsuario"
                    name="tipoUsuario"
                    onChange={handleInputTipoUsuarioChange}
                  >
                    <option defaultValue={" escolha "} />
                    <option value="usuario">usuario normal</option>
                    <option value="admin"> administrador </option>
                  </select>
                </div>

                <div className="row mb-3 px-3">
                  <button
                    type="submit"
                    className={`btn ${Styles.btnBlue} text-center`}
                    onClick={handleSumitRegister}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
