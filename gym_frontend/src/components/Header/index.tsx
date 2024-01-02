"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { useEffect, useState } from "react";

export const Header: React.FC = () => {
  const rotaAtual = usePathname();
  const route = useRouter();
  const [rota, setRota] = useState(rotaAtual);

  useEffect(() => {
    setRota(rotaAtual);
  }, [rotaAtual]);

  const handleClickLink = (path: string) => {
    setRota(path);
  };
  const handleButtonsView = () => {
    if (rota === "/login" || rota != "/manager") {
      return (
        <li className="nav-item">
          <button
            className="btn btn-outline-success rounded-pill"
            onClick={()=>{
              handleClickLink("/login");
              route.replace("/login")
            }}
          >
            Login
          </button>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <button className="btn btn-outline-danger rounded-pill"
           onClick={()=>{
            handleClickLink("/");
            destroyCookie(undefined, 'app_ginasio_token');
              route.replace("/");
           }}
          >
            Logout
          </button>
        </li>
      );
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-md-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" href={"/"}>
            <Image
              src="/assets/images/logo.png"
              width={50}
              height={50}
              alt="logo da app"
            />
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href={"/"}
                onClick={() => {
                  handleClickLink("/");
                }}
              >
                Home
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href={"/mural"}
                onClick={() => {
                  handleClickLink("/mural");
                }}
              >
                Mural
              </Link>
            </li> */}
            {handleButtonsView()}
          </ul>
        </div>
      </div>
    </nav>
  );
};
