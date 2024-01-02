// import { AuthRoutes } from "./auth.routes";
import { PublicRoutes } from "./publicas.routes";
import { ReactNode, useContext, useEffect, useState } from "react";
import { ContextAuth } from "../shared/contexts/authContext";
import { DrawerRoutes } from "./drawer.routes";
// import { getData } from "../shared/storage";

export const ControllerRoutes: React.FC = (): ReactNode => {
  const { usuarioAuthenticado } = useContext(ContextAuth);

  useEffect(() => {}, [usuarioAuthenticado]);

  if (usuarioAuthenticado) {
    return <DrawerRoutes />;
  } else {
    return <PublicRoutes />;
  }
};
