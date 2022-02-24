import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from "@mui/styles";
import { Typography, Image } from "@mui/material"
const customPalette = {
  matisse: '#16738D',
  pictonBlue: '#24C0EB',
  monteCarlo: '#87D3CF',
  persimmon: '#FF7350',
  coral: '#FF8259',
  koromiko: '#FEB865',
  concrete: '#F3F3F3',
  dawnPink: '#F1E4DF',
  bridesmaid: '#FDEAE4',
  cadetBlue: '#B2B7CA',
  outerSpace: '#343A40',
  black: '#24282C',
  white: '#FFFF',
}
const useStyles = makeStyles(() => {
  const baseStyle = {
    lineHeight: "300px",
    color: "black"
  };

  return {
    slide0: {
      ...baseStyle,
      backgroundColor: customPalette[0],
    },
    slide1: {
      ...baseStyle,
      backgroundColor: customPalette[1],
    },
    slide2: {
      ...baseStyle,
      backgroundColor: customPalette[2],
    },
    slide3: {
      ...baseStyle,
      backgroundColor: customPalette[3],
    },
    slide4: {
      ...baseStyle,
      backgroundColor: customPalette[4],
    },
    slide5: {
      ...baseStyle,
      backgroundColor: customPalette[5],
    }
  }

})

const stack = [
  {
    name: "Postgresql",
    src: "./images/stack/postgres.jpeg"
  },
  {
    name: "Sequelize",
    src: "./images/stack/sequelize.png"
  },
  {
    name: "Express",
    src: "./images/stack/express.png"
  },
  {
    name: "React",
    src: "./images/stack/react.png"
  },
  {
    name: "Redux",
    src: "./images/stack/redux.png"
  },
  {
    name: "Node.js",
    src: "./images/stack/node.png"
  },
  {
    name: "MUI Material",
    src: "./images/stack/mui.png"
  },
  {
    name: "Socket.io",
    src: "./images/stack/socketio.png"
  }
];

const TechStack = () => {
  const [swipeableActions, setSwipeableActions] = React.useState();
  const classes = useStyles();

  return (
    <div>
      <h1>Our Tech Stack</h1>
      <div className="left-right" style={{backgroundColor: customPalette.concrete}}>
      <SwipeableViews
      enableMouseEvents
      action={actions => setSwipeableActions(actions)}
          resistance
          animateHeight
          centered
          scrollButtons="auto"
        >
          <div className="dev-card">
            {stack.map((tech, index) => (
            <div className={classes[`slide${index}`]} key={tech.name}>

              <h1>{tech.name}</h1>
              <img
                className="dev-profile"
                src={tech.src} />
              </div>
          ))}
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default TechStack;
