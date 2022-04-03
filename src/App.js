import { Grid } from "@mui/material";
import React from "react";
import ModalWindow from "./Components/ModalWindow";
import DoingList from "./pages/DoingList";
import DoneList from "./pages/DoneList";
import Header from "./pages/Header";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{mt: 3}}>
        <Grid item xs={4}>
          <TodoList />
        </Grid>
        <Grid item xs={4}>
          <DoingList />
        </Grid>
        <Grid item xs={4}>
          <DoneList/>
        </Grid>
      </Grid>
      <ModalWindow  />
    </>
  );
}

export default App;
