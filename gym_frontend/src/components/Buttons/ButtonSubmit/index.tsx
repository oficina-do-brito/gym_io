import { ReactNode } from "react";

interface IpropsButtonSubmit {
    width?: number;
    height?: number;
    my?: number;
    bgType?: "success" | "primary" | "secondary" | "danger" | "warning";
    children: ReactNode;
}
export const ButtonSubmit: React.FC<IpropsButtonSubmit> = (
  props: IpropsButtonSubmit
) => {
  return (
    <button
      type="submit"
      className={`btn btn-outline-${
        props.bgType ? props.bgType : "success"
      } w-${props.width} h-${props.height} my-${
        props.my
      } d-flex align-items-center justify-content-center`}
    >
      {props.children}
    </button>
  );
};
