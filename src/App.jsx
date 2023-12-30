import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularPost } from "./feature/popular/popularSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularPost());
  });

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
