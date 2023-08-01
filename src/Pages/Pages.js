import React from "react";

// The External Components
import TopSection from "./Components/TopSection/TopSection";
import { Entireelement, InternalComponents } from "./PagesStyles";
import Navbar from "./Components/TopSection/Navbar";

export default function Pages() {
  return (
    <>
      <Entireelement>
        <InternalComponents>
          <Navbar />
          <TopSection />
        </InternalComponents>
      </Entireelement>
    </>
  );
}
