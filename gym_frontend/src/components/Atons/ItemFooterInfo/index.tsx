import { ReactNode } from "react";

interface IItemFooterInfoprops {
  link: string;
  children: ReactNode;
}
export const ItemFooterInfo: React.FC<IItemFooterInfoprops> = ({
  link,
  children,
}: IItemFooterInfoprops) => {
  return (
    <p>
      <a href={link} className="text-dark">
        {children}
      </a>
    </p>
  );
};
