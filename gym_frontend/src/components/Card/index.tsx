import ButtonGeneric from "../Buttons/ButtonGeneric";

interface IpropsCard {
  numberCard: number;
  link: string;
  title: string;
  description: string;
  textButton?: string;
  bgType?: "success" | "primary" | "secondary" | "danger" | "warning";
}
const Card: React.FC<IpropsCard> = ({
  numberCard,
  link,
  title,
  description,
  textButton,
  bgType,
}: IpropsCard) => {
  return (
    <div
      className={`card border-${
        bgType ? bgType : "success"
      } d-flex flex-column align-items-center m-3`}
      style={{
        maxWidth: "17rem",
        minWidth: "17rem",
        maxHeight: "28rem",
        minHeight: "22rem",
      }}
    >
      <div className="card-header">Noticia #{numberCard}</div>
      <div className={`card-body text-${bgType ? bgType : "success"}`}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text overflow-auto" style={{ maxHeight: "9rem" }}>
          {description}
        </p>
      </div>
      <ButtonGeneric
        link={link}
        nome={textButton ? textButton : "enviar"}
        width={75}
        height={25}
        my={3}
        bgType={bgType}
      />
    </div>
  );
};
export default Card;
