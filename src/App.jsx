import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import PostGrid from "./components/PostGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          lg: `"header" "main" "footer"`,
        }}
      >
        <GridItem area={"header"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"}>
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
