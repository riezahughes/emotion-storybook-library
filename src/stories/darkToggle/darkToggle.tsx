import React from "react";
import styled from "@emotion/styled";
import { LightMode, DarkMode } from "@emotion-icons/material";

interface DarkToggleProps {
  isDark: boolean;
  onClick: (event: React.MouseEvent<SVGSVGElement>) => void;
}
export const DarkToggle = ({
  isDark = false,
  onClick,
  ...props
}: DarkToggleProps) => {
  const ToggleContainer = styled.div`
    max-width: 100px;
    display: flex;
    height: 10px;
    font-size: 10px;
    background-color: ${isDark ? "#332f7d" : "#fefefe"};
    border: ${isDark ? "2px solid #21295c" : "1px solid #eee"};
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    color: ${isDark ? "white" : "#333"};
    cursor: pointer;
    font-family: "Roboto", sans-serif;
  `;

  const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    padding: 0px 5px;
  `;

  return (
    <ToggleContainer>
      {isDark ? (
        <>
          <Div>
            <DarkMode title="Dark Mode" size="18" onClick={onClick} />
          </Div>
          <Div>
            <small>DARK THEME</small>
          </Div>
        </>
      ) : (
        <>
          <Div>
            <LightMode title="Light Mode" size="18" onClick={onClick} />
          </Div>
          <Div>
            <small>LIGHT THEME</small>
          </Div>
        </>
      )}
    </ToggleContainer>
  );
};

export default DarkToggle;
