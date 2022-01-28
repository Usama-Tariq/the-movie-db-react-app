import React from "react";
import Genre from "./Genre";
import Movies from "./Movies";

function Home(props: any) {
  return (
    <>
      <Movies />
      <Genre />
    </>
  );
}

export default Home;
