interface ICardFooterSobreprops {}
export const CardFooterSobre: React.FC<
  ICardFooterSobreprops
> = ({}: ICardFooterSobreprops) => {
  return (
    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      {/* Content */}
      <h6 className="text-uppercase fw-bold">Gym io</h6>
      <hr
        className="mb-4 mt-0 d-inline-block mx-auto"
        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
      />
      <p>
        A melhor ferramenta e mais completa do mercado quando se trata de
        gerenciamento de horários para ginásios poliesportivos, contamos com
        mais de 10 funcionalidades que passam informação quase que em tempo real
        para tornar a sua experiência de gerenciamento excelente.
      </p>
    </div>
  );
};
