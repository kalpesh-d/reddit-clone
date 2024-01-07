import { Grid, GridItem } from "@chakra-ui/react";
import PostGrid from "../components/PostGrid";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          lg: `"header" "main"`,
        }}
      >
        <GridItem area={"header"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"}>
          <PostGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
