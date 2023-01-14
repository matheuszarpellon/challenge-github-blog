import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

interface DefaultLayoutProps {

}

const DefaultLayout: React.FC<DefaultLayoutProps> = () => {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

export default DefaultLayout;