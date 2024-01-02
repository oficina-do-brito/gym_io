"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

type GenericButtonProps = {
  link: string;
  nome: string;
  width?: number;
  height?: number;
  my?: number;
  bgType?: "success" | "primary" | "secondary" | "danger" | "warning";
};

export default class ButtonGeneric extends React.Component<GenericButtonProps> {
  constructor(props: GenericButtonProps) {
    super(props);
  }
  render(): ReactNode {
    return (
      <Link href={this.props.link} 
      className={`btn btn-outline-${this.props.bgType ? this.props.bgType : "success"}
       w-${this.props.width}
       h-${this.props.height} 
       my-${this.props.my}
       d-flex align-items-center justify-content-center`}>
        {this.props.nome}
      </Link>
    );
  }
}
