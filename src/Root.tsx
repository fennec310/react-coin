import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "./styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default Root;
