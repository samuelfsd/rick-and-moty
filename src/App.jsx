import { Grid, GridItem } from "@chakra-ui/react";
import { Cards } from "./components/Cards";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";

const App = () => (
  <Grid>
    <GridItem>
      <Header />
    </GridItem>
    <Grid margin="4rem" templateColumns="repeat(1, 1fr 3fr)" gap={4}>
      <GridItem h="300px" bg="tomato">
        <Filters />
      </GridItem>
      <Grid margin="0 0 0 4rem " templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem w="350px" h="300px" bg="papayawhip">
          <Cards />
        </GridItem>
        <GridItem w="350px" bg="papayawhip">
          <Cards />
        </GridItem>
        <GridItem w="350px" bg="papayawhip">
          <Cards />
        </GridItem>
      </Grid>
    </Grid>
  </Grid>
);

export { App };
