'use client';
import Link from "next/link";
import Styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Cedula, CedulaCadastroView, CedulaReservada } from "@/components/Tables";
import { IHorario } from "@/contexts/interfaces/interfaces.aplication";
import { RequestGetWithoutCredential } from "@/shared/axios/requests";

const Mural: React.FC = () => {
  const [horarios, setHorarios] = useState<IHorario[]>([] as IHorario[]);
  const List_Horarios = ["Seg","Ter","Qua","Qui","Sex","Sab"];

  useEffect(() => {
    handleGetHorarios();
  }, [horarios]);

  const handleGetHorarios = async () => {
    const response = await RequestGetWithoutCredential("horarios");
    setHorarios(response);
  };

  const handleRenderCedules = (
    hora: string,
    diaSemana: string,
    index:number
  ): JSX.Element => {
    let unicoHorario = null;
    for (let i = 0; i < horarios.length; i++) {
      if ( (horarios[i].horario.toUpperCase() === hora.toUpperCase()) && (horarios[i].dia.toUpperCase() === diaSemana.toUpperCase()) ) {
        unicoHorario = horarios[i];
      }
    }
    if (unicoHorario) {
      return (
        <div key={index}>
          <Cedula nomeEquipe={unicoHorario.nomeEquipe} nomeResponsavel={unicoHorario.responsavelEquipe} />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <CedulaCadastroView />
        </div>
      );
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="content">
        <div className="container">
          <div className="row">
            <div
              className={`col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center ${Styles.mb30}`}
            >
              <h2 className="p-5">Horario de Funcionamento do Ginásio</h2>
            </div>
            <div className={`table-responsive`}>
              <table className={`timetable table table-striped `}>
                <thead>
                  <tr className={`text-center`}>
                    <th scope="col" />
                    <th scope="col">Segunda</th>
                    <th scope="col">Terça</th>
                    <th scope="col">Quarta</th>
                    <th scope="col">Quinta</th>
                    <th scope="col">Sexta</th>
                    <th scope="col">Sabado</th>
                    <th scope="col">Domingo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">06:00 Am - 07:00 Am</th>
                    <td>
                      <CedulaReservada reserva="PM" />
                    </td>
                    <td>
                      <CedulaReservada reserva="PM" />
                    </td>
                    <td>
                      <CedulaReservada reserva="PM" />
                    </td>
                    <td>
                      <CedulaReservada reserva="PM" />
                    </td>
                    <td>
                      <CedulaReservada reserva="PM" />
                    </td>
                    <td>
                      <CedulaReservada reserva="PM" />
                    </td>
                    <td />
                  </tr>
                  <tr>
                      <th scope="row">07:00 Am - 08:00 Am</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("07:00-as-08:00-Am", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">08:00 Am - 09:00 Am</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("8:00-as-9:00-Am", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">09:00 Am - 10:00 Am</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("09:00-as-10:00-Am", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">10:00 Am - 11:00 Am</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("10:00-as-11:00-Am", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">01:00 Am - 02:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("01:00-as-02:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">02:00 Am - 03:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("02:00-as-03:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">03:00 Pm - 04:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("03:00-as-04:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">04:00 Pm - 05:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("04:00-as-05:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">05:00 Pm - 06:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("05:00-as-06:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">06:00 Pm - 07:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("06:00-as-07:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">07:00 Pm - 08:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("07:00-as-08:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">08:00 Pm - 09:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("08:00-as-09:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                    <tr>
                      <th scope="row">09:00 Pm - 10:00 Pm</th>
                      {List_Horarios.map((h,index)=>
                      (<td key={index}>
                        {handleRenderCedules("09:00-as-10:00-Pm", `${h}`,index)}
                      </td>
                      ))}
                      <td />
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Link className={`btn btn-outline-success w-50 my-5`} href={"/login"} id="logar">
        + Quero solicitar meu horario
      </Link>
    </div>
  );
};
export default Mural;
