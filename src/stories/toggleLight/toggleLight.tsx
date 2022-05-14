import React from "react";
import styled from "@emotion/styled";

interface ToggleLightProps {
  illuminate: boolean;
}
export const ToggleLight = ({
  illuminate = false,
  ...props
}: ToggleLightProps) => {
  const Light = styled.div`
    width: 3px;
    height: 3px;
    background-color: ${illuminate ? "#eddd9a" : "#fefefe"};
    border: ${illuminate ? "1px solid #bfab58" : "1px solid #ccc"};
    border-radius: 50%;
    padding: 1px;
  `;

  return <Light />;
};
