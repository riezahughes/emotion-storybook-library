import React from "react";
import styled from "@emotion/styled";

interface CardProps {
  color?: "black" | "white";
}

export const Card = ({ color, ...props }: CardProps) => {
  console.log(color);
  const Div = styled.div`
    background: ${() => {
      return color == "black" ? "black" : "white";
    }};
    color: ${() => (color == "black" ? "white" : "black")};
  `;

  if (color !== "black" && color !== "white") {
    return <Div>error</Div>;
  }

  return <Div>I'm a {color} card!</Div>;
};
