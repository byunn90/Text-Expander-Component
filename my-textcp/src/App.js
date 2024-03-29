import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <div className="box">
        <TextExpander
          expanded={true}
          collapsedNumWords={20}
          expandButtonText="Show text"
          collapseButtonText="Collapse text"
          buttonColor="#ff6622"
        >
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans
          and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </TextExpander>

        <TextExpander
          expanded={true}
          collapsedNumWords={20}
          expandButtonText="Show text"
          collapseButtonText="Collapse text"
          buttonColor="#ff6622"
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </TextExpander>
      </div>
      <div className="box">
        <TextExpander
          expanded={true}
          collapsedNumWords={20}
          expandButtonText="Show More"
          collapseButtonText="Show Less"
          buttonColor="#ff6622"
          className="box"
        >
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what we'll
          discover next!
        </TextExpander>
      </div>
    </div>
  );
}

// When clicked, show the rest of the text and apply some CSS
function TextExpander({
  collapsedNumWords,
  expandButtonText = "Show More",
  collapseButtonText,
  children,
  color,
  styles,
  className,
  buttonColor = "#1f09cd",
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "5px",
    color: buttonColor,
  };

  return (
    <div>
      <span>
        {expanded
          ? children
          : children.split(" ").slice(0, collapsedNumWords).join(" ")}
      </span>
      <button onClick={toggleExpand} style={buttonStyle}>
        {expanded ? collapseButtonText : expandButtonText} ...
      </button>
    </div>
  );
}
