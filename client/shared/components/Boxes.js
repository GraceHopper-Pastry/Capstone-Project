import React, {useState} from "react";
import superb from "superb";
import AnimatedVisibility from "./AnimatedVisability";

const colors = [
  "#16738D",
  "#50E5FF",
  "#FF7350",
  "#FFDC75",
  "#FF7C83",
  "#FFAA42",
  "#7F7B82",
  "#4D7EA8",
  "#343A40"
];

function Box({ word }) {
  const [color] = useState(colors[Math.floor(Math.random() * (colors.length + 1))]);
  const [visible, setVisible] = useState(true);

  function hideMe() {
    setVisible(false);
  }

  let style = { borderColor: color, backgroundColor: color };

  return (
    <AnimatedVisibility
      visible={visible}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <div className="box" style={style}>
        <div className="center">{word}</div>
        <button className="bottom-corner" onClick={hideMe}>
          <i className="center far fa-eye fa-lg" />
        </button>
      </div>
    </AnimatedVisibility>
  );
}

export default function Boxes() {
  const startingWords = new Set();
  for (let i = 0; i < 9; i++) {
    startingWords[i] = superb.random();
  }
  const [words] = useState(Array.from(startingWords));

  return (
    <div className="boxes">
      {words.map(word => (
        <Box key={word} word={word} />
      ))}
    </div>
  );
}

