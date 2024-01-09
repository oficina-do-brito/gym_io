interface ICopyrightprops {
  data: string;
  link: string;
  refe: string;
}
export const Copyright: React.FC<ICopyrightprops> = ({
  data,
  link,
  refe,
}: ICopyrightprops) => {
  return (
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © {data} Copyright:
      <a className="text-dark" href={link}>
        {refe}
      </a>
    </div>
  );
};
