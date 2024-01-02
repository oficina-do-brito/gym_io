import Styles from "./layout.module.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: Array<React.ReactNode>;
}

const Layout: React.FC<LayoutProps> = ({ children }): ReactNode => {
  const [headerChildren, contentChildren, sidebarChildren, footerChildren] =
    children;
  return (
    <div className="container-fluid m-0 p-0 h-100">

      <div className="row m-0 p-0 h-auto">
        <div className="col-md-12 p-0 ">{headerChildren}</div>
      </div>

      <div className="row m-0 p-0 h-auto">
        <div className="col-md-10 col-lg-11 p-5">{contentChildren}</div>
        <div className="col-md-2 col-lg-1 p-0 d-flex flex-row-reverse">{sidebarChildren}</div>
      </div>

      <div className="row m-0 p-0 h-25">
        <div className="col-md-12 p-0">{footerChildren}</div>
      </div>

    </div>
  );
};
export default Layout;
