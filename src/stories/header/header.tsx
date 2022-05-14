import React, { ReactChildren } from "react";
import styled from "@emotion/styled";

interface HeaderProps {
  illuminate: boolean;
  children: React.ReactNode;
}
export const Header = ({
  illuminate = false,
  children,
  ...props
}: HeaderProps) => {
  const Header = styled.div`
    width: 100%;
    height: auto;
    background-color: ${illuminate ? "#eddd9a" : "#fefefe"};
  `;

  return <Header>{children}</Header>;
};
