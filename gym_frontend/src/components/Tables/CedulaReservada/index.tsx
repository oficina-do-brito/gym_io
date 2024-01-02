import Link from "next/link";
import React from "react";

interface IpropsCelula{
  reserva:string;
}
export const CedulaReservada: React.FC<IpropsCelula> = ({reserva}:IpropsCelula) => {
  return (
    <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-center">
      <Link
        href=""
        className="text-decoration-none text-black d-flex flex-column align-items-center justify-content-center"
      >
        <p className="text-center">Horario Reservado</p>
        <i className={`bi bi-shield-exclamation text-center h4`} />
        <p className="text-center">Horario da {reserva}</p>
      </Link>
    </div>
  );
};
