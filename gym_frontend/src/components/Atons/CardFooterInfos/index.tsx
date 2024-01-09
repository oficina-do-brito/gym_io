import { ReactNode } from "react";
import { ItemFooterInfo } from "../ItemFooterInfo";

export interface IitemObj {
  link: string;
  content: string;
}
interface ICardFooterInfosprops {
  title: string;
  listObj: Array<IitemObj>;
}

export const CardFooterInfos: React.FC<ICardFooterInfosprops> = ({
  title,
  listObj,
}: ICardFooterInfosprops) => {
  return (
    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      {/* Links */}
      <h6 className="text-uppercase fw-bold">{title}</h6>
      <hr
        className="mb-4 mt-0 d-inline-block mx-auto"
        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
      />
      <ItemFooterInfo link={listObj[0].link}>
        {listObj[0].content}
      </ItemFooterInfo>
      <ItemFooterInfo link={listObj[1].link}>
        {listObj[1].content}
      </ItemFooterInfo>
      <ItemFooterInfo link={listObj[2].link}>
        {listObj[2].content}
      </ItemFooterInfo>
      <ItemFooterInfo link={listObj[3].link}>
        {listObj[3].content}
      </ItemFooterInfo>
    </div>
  );
};
