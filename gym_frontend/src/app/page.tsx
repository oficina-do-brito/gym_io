import ButtonGeneric from "@/components/Buttons/ButtonGeneric";
import { Minisection } from "@/components/MiniSections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex tw-min-h-screen flex-col items-center justify-between">
      <div className="row tw-w-full">
        <div className="col-md-4 py-5">
          <h1 className="tw-font-mono tw-hover:font-serif">
            Aplicação com foco no gerenciamento de ginasio Poliesportivo.
          </h1>
          <Image
            src={"/assets/images/sudamerica.png"}
            width={1200}
            height={1200}
            alt="imagem background"
          />
        </div>
        <div className="col-md-8">
          <Minisection
            autor={"Edi Franco"}
            tituloNoticia={"algum titulo #1"}
            descricaNoticiao={"alguma descrição"}
            imagem="/assets/images/logo.png"
          >
            <ButtonGeneric link="/" nome="ver mais" width={50} />
          </Minisection>
          <Minisection
            autor={"Edi Franco"}
            tituloNoticia={"Sucesso no Vôlei Caicoense #2"}
            descricaNoticiao={"Conquista no Vôlei feminino caicoense é destacado nos principal blogs do Seridó..."}
            imagem="/assets/images/logo.png"
          >
            <ButtonGeneric link="/" nome="ver mais" width={25} />
          </Minisection>
        </div>
      </div>
      <section>
        <h2 className="tw-text-center tw-my-5">Sobre a Aplicação</h2>
        <p className="p-5">
          Sabemos que Caicó e o Seridó têm tradição no esporte, constituído um
          grande centro esportivo na região. A cidade que a muito tempo está
          apta a e vem recebendo propostas para sediar eventos regionais e até
          mesmo nacionais, sedia anualmente os JERNs - Jogos Escolares do Rio
          Grande do Norte, onde congrega os municípios da região polarizados por
          Caicó, mas nem tudo são flores o esporte vem sofrendo com o
          desbalanceamento informacional com relação a confronto de horários e
          marcação de eventos esportivos. Com intuito de melhor distribuir e
          notificar os usuários que utilizam o serviço público oferecido pelos
          ginasio poliesportivo this.nomeGyn1 e this.nomeGyn2, a this.Aplicação conta com
          serviços de cadastro e manipulação de horários que podem ser acessados
          de diferentes plataformas desde que tenha conexão com internet.
        </p>
      </section>
      <section className="tw-bg-slate-200">
        <h2 className="tw-text-center tw-my-5">
          Um breve historico de conquistas do esporte Caicoense
        </h2>
        <p className="p-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          accusamus, ipsum ducimus non fuga facere explicabo, quae maiores
          aliquam voluptate ut fugit minima ex nobis voluptatibus maxime labore
          velit repellat.
        </p>
      </section>
    </main>
  );
}
