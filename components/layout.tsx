import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

// import { Container } from "next/app";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";

import { Header } from "./header";
import { SubHeader } from "./Sub-Header";


const sections = [
  { title: "Home", url: "#" },
  { title: "Blogs", url: "#" },
  { title: "About Me", url: "#" },
  
];

export const siteTitle = "Krunal Parmar";


export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Full stack developer" sections={sections}></Header>
        <SubHeader></SubHeader>
        <main>{children}</main>
      </Container>
    </React.Fragment>
  );
}
