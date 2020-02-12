import React, { useEffect } from "react";
import axios from "axios";
import "tableau-api";

function Test2() {
  useEffect(() => {
    initViz2();
  }, []);

  var viz, workbook, worksheet;

  const initViz2 = () => {
    const vizUrl = `https://public.tableau.com/views/WojBombs/WojBombs?:display_count=n&:origin=viz_share_link`;
    // const vizUrl = `https://public.tableau.com/views/MigrantdeathsanddisappearancesintheMediterranean/MigrantsintheMediterranean?:display_count=n&:origin=viz_share_link`;
    // const vizUrl = `http://public.tableau.com/views/RegionalSampleWorkbook/Storms`;
    const vizContainer = document.getElementById("vizContainer");
    viz = new window.tableau.Viz(vizContainer, vizUrl);
    // new window.tableau.Viz(vizContainer, vizUrl);
  };

  return (
    <div>
      <div id={"vizContainer"}></div>
    </div>
  );
}

export default Test2;
