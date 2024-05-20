import React from "react";
import { Portfolio } from "./page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 200,
    });
  }, []);
  return (
    <>
      <Portfolio />
    </>
  );
}

export default App;
