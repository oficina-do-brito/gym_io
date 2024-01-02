"use client";

import { ButtonSubmit } from "@/components/Buttons/ButtonSubmit";
import InputText from "@/components/Input";
import { ContextAuth } from "@/contexts/authContext";
import { RequestPostWithCredential } from "@/shared";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

interface IpropsHorario {
  dia: string;
  horario: string;
  turno: string;
  nomeEquipe: string;
  responsavelEquipe: string;
}
const FormCadastro: React.FC = () => {
  const [dados, setDados] = useState<IpropsHorario>({} as IpropsHorario);
  const route = useRouter();
  const auth = useContext(ContextAuth);

  const handleChangeDia = (event: ChangeEvent<HTMLSelectElement>) => {
    setDados({ ...dados, dia: event.target.value });
  };

  const handleChangeHorario = (event: ChangeEvent<HTMLSelectElement>) => {
    setDados({ ...dados, horario: event.target.value });
  };

  const handleChangeTurn = (event: ChangeEvent<HTMLInputElement>) => {
    setDados({ ...dados, turno: event.target.value });
  };

  const handleChangeNomeEquipe = (event: ChangeEvent<HTMLInputElement>) => {
    setDados({ ...dados, nomeEquipe: event.target.value });
  };

  const handleChangeResponsavelEquipe = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setDados({ ...dados, responsavelEquipe: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { app_ginasio_token: token } = parseCookies();
    const data = {
      dia: dados.dia,
      horario: dados.horario,
      turno: dados.turno,
      nomeEquipe: dados.nomeEquipe,
      responsavelEquipe: dados.responsavelEquipe,
    };
    const response = await RequestPostWithCredential(
      `horarios/${auth.usuarioAuthenticado.id}`,
      token,
      data
    );
    if (response) {
      route.push("/manager");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="selectInput" className="form-label">
          Dia da Semana
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="selectInput"
          onChange={handleChangeDia}
        >
          <option defaultValue={"receber do calendario como props"} />
          <option value="Seg">Segunda</option>
          <option value="Ter">Terça</option>
          <option value="Qua">Quarta</option>
          <option value="Qui">Quinta</option>
          <option value="Sex">Sexta</option>
          <option value="Sab">Sábado</option>
        </select>

        <br />

        <label htmlFor="selectInputHorario" className="form-label">
          Horarios disponiveis
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="selectInputHorario"
          onChange={handleChangeHorario}
        >
          <option defaultValue={"receber do calendario como props"} />
          <option value="06:00-as-07:00-Am">06:00 Am - 07:00 Am</option>
          <option value="07:00-as-08:00-Am">07:00 Am - 08:00 Am</option>
          <option value="08:00-as-09:00-Am">08:00 Am - 09:00 Am</option>
          <option value="09:00-as-10:00-Am">09:00 Am - 10:00 Am</option>
          <option value="10:00-as-11:00-Am">10:00 Am - 11:00 Am</option>
          <option value="01:00-as-02:00-Pm">1:00 Pm - 2:00 Pm</option>
          <option value="02:00-as-03:00-Pm">2:00 Pm - 3:00 Pm</option>
          <option value="03:00-as-04:00-Pm">3:00 Pm - 4:00 Pm</option>
          <option value="04:00-as-05:00-Pm">4:00 Pm - 5:00 Pm</option>
          <option value="05:00-as-06:00-Pm">5:00 Pm - 6:00 Pm</option>
          <option value="06:00-as-07:00-Pm">6:00 Pm - 7:00 Pm</option>
          <option value="07:00-as-08:00-Pm">7:00 Pm - 8:00 Pm</option>
          <option value="08:00-as-09:00-Pm">8:00 Pm - 9:00 Pm</option>
          <option value="09:00-as-10:00-Pm">9:00 Pm - 10:00 Pm</option>
        </select>

        <br />
        <InputText
          nameLabel={"turno"}
          inputType={"text"}
          handleFunction={handleChangeTurn}
        />
        <InputText
          nameLabel={"nomeEquipe"}
          inputType={"text"}
          handleFunction={handleChangeNomeEquipe}
        />
        <InputText
          nameLabel={"responsavelEquipe"}
          inputType={"text"}
          handleFunction={handleChangeResponsavelEquipe}
        />
        <br />
        <div className="col-12">
          <ButtonSubmit >Cadastrar</ButtonSubmit>
        </div>
      </form>
    </>
  );
};
export default FormCadastro;
