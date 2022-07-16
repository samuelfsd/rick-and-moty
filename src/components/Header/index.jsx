import { Box, Container, Flex, Image, Spacer } from "@chakra-ui/react";
import { ToggleColorMode } from "../ToggleColorMode";
import logo from "../../assets/logo.svg";

const Header = () => (
  <Container maxW="1140px" maxH="90px">
    <Flex inWidth="max-content" alignItems="center">
      <Box>
        <Image boxSize="150px" src={logo} alt="Logo rick and morty" />
      </Box>
      <Spacer />
      <Box>
        <ToggleColorMode />
      </Box>
    </Flex>
  </Container>
);

export { Header };
