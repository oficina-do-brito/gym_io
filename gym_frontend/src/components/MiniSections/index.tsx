import React, { ReactNode } from "react";
import Image from "next/image";

interface IpropsMinisection {
  autor:string;
  tituloNoticia: string;
  descricaNoticiao: string;
  imagem:string;
  children: ReactNode;
}
export const Minisection: React.FC<IpropsMinisection> = ({
  autor,
  tituloNoticia,
  descricaNoticiao,
  imagem,
  children,
}: IpropsMinisection) => {
  return (
    <div className="tw-py-8 tw-px-8 tw-max-w-full tw-mx-auto tw-bg-gray-50 tw-rounded-xl tw-shadow-lg tw-space-y-2 tw-sm:py-4 tw-flex tw-flex-wrap tw-items-left tw-sm:space-y-0 tw-m-9">
      <Image className="tw-block tw-mx-5 tw-h-24 tw-rounded-full tw-sm:mx-0 tw-sm:shrink-0" src={imagem} width={80} height={50} alt="Womans Face"/>
      <div className="tw-text-center tw-space-y-2 tw-sm:text-left">
        <div className="tw-space-y-0.5">
          <p className="tw-text-lg text-black ">~{autor}</p>
          <h2 className="tw-text-slate-500 tw-font-medium">{tituloNoticia}</h2>
          <p className="tw-text-slate-500 tw-font-medium">{descricaNoticiao}</p>
        </div>
        {children}
      </div>

    </div>
  );
};
