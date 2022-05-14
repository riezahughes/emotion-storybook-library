import React from "react";
import styled from "@emotion/styled";

interface CardProps {
  color: "black" | "white";
  text?: string;
  height: "max" | "min";
}

export const Card = ({
  color,
  text = `I'm ${color}`,
  height = "max",
  ...props
}: CardProps) => {
  const Div = styled.div`
    background: ${() => {
      return color == "black" ? "#333" : "white";
    }};
    background: ${
      color == "black"
        ? "linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(17,17,17,1) 12%, rgba(51,51,51,1) 100%);"
        : "linear-gradient(-45deg, rgba(223,223,223,1) 0%, rgba(245,245,245,1) 12%, rgba(255,255,255,1) 100%);"
    }
    color: ${() => (color == "black" ? "white" : "#333")};
    max-width: 250px;
    height: ${height == "max" ? "320px" : "200px"};
    border-radius: 5px;
    border: 1px solid #333;
    padding: 20px 10px;
    -webkit-box-shadow: 7px 7px 11px 0px rgba(194, 194, 194, 1);
    -moz-box-shadow: 7px 7px 11px 0px rgba(194, 194, 194, 1);
    box-shadow: 7px 7px 11px 0px rgba(194, 194, 194, 1);
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
  `;

  if (color !== "black" && color !== "white") {
    return <Div>error</Div>;
  }

  return <Div>{text}</Div>;
};
