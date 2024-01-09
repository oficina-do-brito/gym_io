import {
  CardFooterInfos,
  CardFooterSobre,
  Copyright,
  ISocialIconLinkprops,
  IitemObj,
  SocialIconLink,
} from "../Atons";

export const Footer: React.FC = () => {
  const ObjLinking = [
    { link: "#", content: "Qualquer coisa" },
    { link: "#", content: "Qualquer coisa" },
    { link: "#", content: "Qualquer coisa" },
    { link: "#", content: "Qualquer coisa" },
  ] as Array<IitemObj>;
  const linksSociais = [
    {
      link: "https://www.facebook.com/clodoaldoneto45",
      iconName: "facebook",
    },
    { link: "#", iconName: "twitter" },
    { link: "#", iconName: "google" },
    { link: "#", iconName: "instagram" },
    { link: "#", iconName: "linkedin" },
    { link: "#", iconName: "github" },
  ] as Array<ISocialIconLinkprops>;

  const handleRenderSocialMedia = () => {
    return linksSociais.map((item, index) => (
      <SocialIconLink key={index} link={item.link} iconName={item.iconName} />
    ));
  };

  return (
    <div className="w-full mb-0">
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: "#ECEFF1" }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-4 text-white"
          style={{ backgroundColor: "#21D192" }}
        >
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div>{handleRenderSocialMedia()}</div>
        </section>

        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              <CardFooterSobre />
              <CardFooterInfos title={"Parceiros"} listObj={ObjLinking} />
              <CardFooterInfos title={"Cidades"} listObj={ObjLinking} />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <i className="bi bi-house mr-3"> New York, NY 10012, US</i>
                </p>
                <p>
                  <i className="bi bi-envelope mr-3"> info@example.com</i>
                </p>
                <p>
                  <i className="bi bi-phone mr-3"> + 01 234 567 88</i>
                </p>
                <p>
                  <i className="bi bi-phone mr-3"> + 01 234 567 890</i>
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        <Copyright
          data={"2023"}
          link={"https://github.com/oficina-do-brito"}
          refe={"oficina-do-brito"}
        />
      </footer>
    </div>
  );
};
