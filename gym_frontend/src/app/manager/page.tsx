"use client";
import { ContextAuth } from "@/contexts/authContext";
import { parseCookies } from "nookies";
import { ReactNode, useContext, useEffect, useState } from "react";
import { IUsuario } from "@/contexts/interfaces/interfaces.aplication";
import { ContextLinkNext } from "@/contexts/linkNext";

import { Cadastro, Home, Inbox, News } from "@/mappings";
import SideBar from "@/components/SideBar";
import { RequestGetWithCredential } from "@/shared/axios/requests";
import { redirect } from "next/navigation";

const Manager: React.FC = () => {
  const [u, setU] = useState<IUsuario>({} as IUsuario);
  const auth = useContext(ContextAuth);
  const contextLink = useContext(ContextLinkNext);
  const { app_ginasio_token: token } = parseCookies();

  useEffect(() => {
    const usuarioComplete = purcharseUserComplete()
      .then((user) => setU({ ...user } as IUsuario))
      .catch((error) => console.log(error));

    if (!token) {
      redirect("/login");
    }

    changeRenderEmentsMapiingsPage();
  }, []);

  /**
   * @description Essa função pucha todas as informaçoes do usuario assim que possivel
   * > * ela verifica se existe 1 token guadardo nos nos cookies
   *
   * > * se existe faz a busca pelo id so usuario,que deve estar no contexto de authenticação ja que o token existe
   *
   * @returns Uma promessa contendo 1 Usuario ou null
   */
  async function purcharseUserComplete(): Promise<IUsuario | null> {
    const id: number = await auth.usuarioAuthenticado.id;
    if (token) {
      return await RequestGetWithCredential(`usuarios/${id}`, token);
    }
    return null;
  }

  /**
   * @description Essa função faz a renderização dinamica de elementos na div com id content
   * > usa um estado de um provedor que pega informação do lin clicado num Sidebar
   */
  const changeRenderEmentsMapiingsPage = (): ReactNode => {
    if (contextLink.linkNext === "/profile") {
      return <Home />;
    } else if (contextLink.linkNext === "/inbox") {
      return <Inbox />;
    } else if (contextLink.linkNext === "/novohorario") {
      return <Cadastro />;
    } else if (contextLink.linkNext === "/noticias") {
      return <News />;
    } else {
      return <Home />;
    }
  };

  return (
    <div className={"container-fluid w-100 m-0 p-0"}>
      <div className="row w-100 h-100 gap-0 m-0 p-0 tw-bg-slate-100">
        <div className="col-2 d-flex justify-content-start p-0 m-0 align-items-start ">
          <SideBar nomeUsuario={u.nome} />
        </div>
        <div className="col-10 px-5">{changeRenderEmentsMapiingsPage()}</div>
      </div>
    </div>
  );
};
export default Manager;
