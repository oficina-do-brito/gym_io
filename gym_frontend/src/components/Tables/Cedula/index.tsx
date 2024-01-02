import React from "react";
interface IpropsCedula {
    nomeEquipe:string;
    nomeResponsavel:string;
}
export const Cedula:React.FC<IpropsCedula> = ({nomeEquipe,nomeResponsavel}:IpropsCedula) =>{
    return (
    <div>
        <h6 className="fs-6 text-success">Reservado para<br/>equipe: {nomeEquipe}</h6>
        <p className="text-end">_{nomeResponsavel}</p>
    </div>);
}