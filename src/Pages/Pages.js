import React from "react";

// The External Components
import TopSection from "./Components/TopSection/TopSection";
import { Entireelement, InternalComponents } from "./PagesStyles";

export default function Pages() {
  return (
    <Entireelement>
      <InternalComponents>
        <TopSection />
      </InternalComponents>
    </Entireelement>
  );
}
