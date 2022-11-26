import Navbar from "../Navigation/Navbar";
import Footer from "./Footer";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import prismStyles from "../../styles/prism";
import katexStyles from "../../styles/katex";
import { Global } from "@emotion/react";
import BackToTop from "../Navigation/Topscroll";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Box as="main">
        <Container my={10} maxWidth="container.sm">
          <Navbar />
          <Global styles={[prismStyles, katexStyles]} />
          {children}
        </Container>
        <BackToTop />
      </Box>
    </>
  );
};

export default Layout;
