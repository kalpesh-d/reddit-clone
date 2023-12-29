import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          lg: `"header header" "nav main" "nav footer"`,
        }}
      >
        <GridItem area={"header"} bg="red.300">
          <Header />
          header
        </GridItem>
        <Show w="10%" above="lg">
          <GridItem bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
        </Show>
        <GridItem bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
