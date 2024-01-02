import Image from "next/image";

const Noticias: React.FC = () => {
  return (
    <>
      <section className="tw-flex tw-flex-col tw-items-center">
        <div className="card" style={{ maxWidth: "70%" }}>
          <div className="card-body">
            <div className="d-flex mb-3">
              <a href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
                  className="border rounded-circle me-2"
                  alt="Avatar"
                  style={{ height: 40 }}
                />
              </a>
              <div>
                <a href="" className="text-dark mb-0">
                  <strong>Anna Doe</strong>
                </a>
                <a
                  href=""
                  className="text-muted d-block"
                  style={{ marginTop: "-6px" }}
                >
                  <small>10h</small>
                </a>
              </div>
            </div>
            {/* Description */}
            <div>
              <p>
                Seleção do Rio Grande do Norte é campeã da Primeira Divisão
                sub-19 feminina do CBS (Créditos: Divulgação/CBV) A seleção do
                Rio Grande do Norte é a campeã da Primeira Divisão sub-19
                feminina do Campeonato Brasileiro de Seleções (CBS) 2022. <br/>A
                equipe venceu o Ceará por 3 sets a 1 (26/24, 12/25, 25/19 e
                25/18) na final e garantiu o troféu no sábado, na competição
                realizada em Brasília (DF) pela Confederação Brasileira de
                Voleibol (CBV) em parceria com o Governo do Distrito Federal.
                “Nós tivemos a chave mais difícil da competição e passamos em
                segundo no grupo porque perdemos por 2 sets a 1 para o Ceará na
                primeira fase. Na final, também contra o Ceará, montamos uma
                estratégia diferente e deu certo. Conseguimos reverter o
                resultado e ganhamos por 3 sets a 1”, analisou o técnico Ricardo
                Canjica. “Todas as jogadoras se destacaram, porque era uma
                equipe com baixa estatura, porém muito aguerrida. Trabalhamos
                bem a defesa, o passe e o saque, e isso fez a diferença. Foi um
                trabalho árduo, mas o esforço foi premiado”. Roraima ganhou a
                medalha de bronze, superando a Paraíba na disputa pelo terceiro
                lugar com uma vitória por 3 sets a 0 (25/16, 25/19 e 25/17). As
                três equipes medalhistas conquistaram o acesso para a Divisão
                Especial do CBS em 2023. Pará, Tocantins e Alagoas, que ficaram
                nas últimas três posições do torneio, disputarão a Segunda
                Divisão da categoria em 2023.
              </p>
            </div>
          </div>
          {/* Media */}
          <div
            className="bg-image hover-overlay ripple rounded-0"
            data-mdb-ripple-color="light"
          >
            <Image
              src="/assets/images/rio-grande-do-norte-conquista-primeira-divisao-sub-19-feminina-do-cbs.jpg"
              width={1200} height={1200}
              alt="volei feminio"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>

          <div className="card-body">
            {/* Reactions */}
            <div className="d-flex justify-content-between mb-3">
              <div>
                <a href="">
                  <i className="fas fa-thumbs-up text-primary" />
                  <i className="fas fa-heart text-danger" />
                  <span>124</span>
                </a>
              </div>
              <div>
                <a href="" className="text-muted">
                  {" "}
                  8 comments{" "}
                </a>
              </div>
            </div>

            <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
              <button
                type="button"
                className="btn btn-link btn-lg"
                data-mdb-ripple-color="dark"
              >
                <i className="fas fa-thumbs-up me-2" />
                Like
              </button>
              <button
                type="button"
                className="btn btn-link btn-lg"
                data-mdb-ripple-color="dark"
              >
                <i className="fas fa-comment-alt me-2" />
                Comment
              </button>
              <button
                type="button"
                className="btn btn-link btn-lg"
                data-mdb-ripple-color="dark"
              >
                <i className="fas fa-share me-2" />
                Share
              </button>
            </div>

            <div className="d-flex mb-3">
              <a href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
                  className="border rounded-circle me-2"
                  alt="Avatar"
                  style={{ height: 40 }}
                />
              </a>
              <div className="form-outline w-100">
                <textarea
                  className="form-control"
                  id="textAreaExample"
                  rows={2}
                  defaultValue={""}
                />
                <label className="form-label" htmlFor="textAreaExample">
                  Write a comment
                </label>
              </div>
            </div>

            <div className="d-flex mb-3">
              <a href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  className="border rounded-circle me-2"
                  alt="Avatar"
                  style={{ height: 40 }}
                />
              </a>
              <div>
                <div className="bg-light rounded-3 px-3 py-1">
                  <a href="" className="text-dark mb-0">
                    <strong>Malcolm Dosh</strong>
                  </a>
                  <a href="" className="text-muted d-block">
                    <small>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Natus, aspernatur!
                    </small>
                  </a>
                </div>
                <a href="" className="text-muted small ms-3 me-2">
                  <strong>Like</strong>
                </a>
                <a href="" className="text-muted small me-2">
                  <strong>Reply</strong>
                </a>
              </div>
            </div>
            <div className="d-flex mb-3">
              <a href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                  className="border rounded-circle me-2"
                  alt="Avatar"
                  style={{ height: 40 }}
                />
              </a>
              <div>
                <div className="bg-light rounded-3 px-3 py-1">
                  <a href="" className="text-dark mb-0">
                    <strong>Rhia Wallis</strong>
                  </a>
                  <a href="" className="text-muted d-block">
                    <small>
                      Et tempora ad natus autem enim a distinctio quaerat
                      asperiores necessitatibus commodi dolorum nam perferendis
                      labore delectus, aliquid placeat quia nisi magnam.
                    </small>
                  </a>
                </div>
                <a href="" className="text-muted small ms-3 me-2">
                  <strong>Like</strong>
                </a>
                <a href="" className="text-muted small me-2">
                  <strong>Reply</strong>
                </a>
              </div>
            </div>
            <div className="d-flex mb-3">
              <a href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
                  className="border rounded-circle me-2"
                  alt="Avatar"
                  style={{ height: 40 }}
                />
              </a>
              <div>
                <div className="bg-light rounded-3 px-3 py-1">
                  <a href="" className="text-dark mb-0">
                    <strong>Marcie Mcgee</strong>
                  </a>
                  <a href="" className="text-muted d-block">
                    <small>
                      Officia asperiores autem sit rerum architecto a deserunt
                      doloribus obcaecati, velit ab at, ad delectus sapiente!
                      Voluptatibus quaerat suscipit in nostrum necessitatibus
                      illum nemo quo beatae obcaecati quidem optio fugit ipsam
                      distinctio, illo repellendus porro sequi alias perferendis
                      ea soluta maiores nisi eligendi? Mollitia debitis quam ex,
                      voluptates cupiditate magnam fugiat.
                    </small>
                  </a>
                </div>
                <a href="" className="text-muted small ms-3 me-2">
                  <strong>Like</strong>
                </a>
                <a href="" className="text-muted small me-2">
                  <strong>Reply</strong>
                </a>
              </div>
            </div>
            {/* Single answer */}
            <div className="d-flex mb-3">
              <a href="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/10.webp"
                  className="border rounded-circle me-2"
                  alt="Avatar"
                  style={{ height: 40 }}
                />
              </a>
              <div>
                <div className="bg-light rounded-3 px-3 py-1">
                  <a href="" className="text-dark mb-0">
                    <strong>Hollie James</strong>
                  </a>
                  <a href="" className="text-muted d-block">
                    <small>
                      Voluptatibus quaerat suscipit in nostrum necessitatibus
                    </small>
                  </a>
                </div>
                <a href="" className="text-muted small ms-3 me-2">
                  <strong>Like</strong>
                </a>
                <a href="" className="text-muted small me-2">
                  <strong>Reply</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Noticias;
