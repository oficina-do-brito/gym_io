"use client";
import Card from "@/components/Card";
import { INoticia } from "@/contexts/interfaces/interfaces.aplication";
import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

const News: React.FC = () => {
  const [noticias, setNoticias] = useState<INoticia[]>([] as INoticia[]);

  useEffect(() => {
    handleGetNoticias();
  }, [noticias]);

  const handleGetNoticias = async () => {
    const { app_ginasio_token: token } = parseCookies();
    const options = {
      method: "GET",
      url: `http://localhost:3000/noticias`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios(options)
      .then((response) => response.data)
      .catch(function (error) {
        console.error(error);
      });
    setNoticias(response);
  };

  return (
    <div className="container-fluid m-0 p-3 d-flex flex-column">
      <h2 className="text-center p-5">Noticias</h2>
      <div className="container-fluid m-0 d-flex flex-row flex-wrap">
        {noticias.map((element, index) => (
          <div key={index}>
            <Card
              numberCard={++index}
              link="/noticias/2"
              title={element.titulo}
              description={element.descricao}
              textButton="ver mais"
            />
          </div>
        ))}

        <Card
          numberCard={0}
          link="/noticias/create"
          title="create"
          description="create"
          textButton="criar noticia"
          bgType={"primary"}
        />
      </div>
    </div>
  );
};
export default News;
