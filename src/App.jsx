import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import PostGrid from "./components/PostGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          lg: `"header header" "nav main" "nav footer"`,
        }}
      >
        <GridItem area={"header"}>
          <Navbar />
        </GridItem>
        <Show w="10%" above="lg">
          <GridItem bg="pink.300" area={"nav"}>
            Nav
          </GridItem>
        </Show>
        <GridItem bg="green.300" area={"main"}>
          <PostGrid />
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
