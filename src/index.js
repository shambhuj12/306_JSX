import React from "react";
import ReactDOM from "react-dom";

const img1 = "https://picsum.photos/200/200";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/400";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="class1" src={img1} alt="croissant" />
      <img className="class2" src={img2} alt="indian" />
      <img className="class3" src={img3} alt="ishcream" />
    </div>
  </div>,
  document.getElementById("root")
);
