import Link from "next/link";
import React from "react";
import Styles from './styles.module.css'

export const CedulaCadastroView: React.FC = () => {
  return (
    <div className={`${Styles.bgAgua} rounded d-flex flex-column align-items-center justify-content-center`}>
      <Link href={"#logar"} className="text-decoration-none text-black d-flex flex-column align-items-center justify-content-center">
        <p className="text-center">Horario Aberto</p>
        <i className={`bi bi-calendar-plus text-center h4`} />
        <p className="text-center">cadastrar</p>
      </Link>
    </div>
  );
};
