
import React from "react";
import ReactDom from "react-dom";
import Card from "./Card"
import "./index.css";
import Data from "./Data";
import Side from "./Side"

function singlecard(val) {
 
  return (
    
    
    <Card
       id={val.id}
      title={val.title}
      link={val.link}
      published={val.published}
      summary={val.summary}
    />
    
    
    );
    
}
<Side/>
ReactDom.render(
  <>
  <div className="leftsidebar">
    <div>
      <div>hello </div>
      <div>hello</div>
      <div>hello</div>
    </div>
  </div>
  {Data.map(singlecard)}
</>,
  document.getElementById("root"));