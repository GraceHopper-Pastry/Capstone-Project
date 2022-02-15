import React from 'react';
import SwipeableViews from 'react-swipeable-views';

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

const styles = (theme) =>({
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: customPalette[0],
  },
  slide2: {
    background: customPalette[1],
  },
  slide3: {
    background: customPalette[2],
  },
  slide4: {
    background: customPalette[3],
  },
  slide5: {
    background: customPalette[4],
  }
});


const TechStack = () => (
  <SwipeableViews enableMouseEvents>
    <div className="stackPostgres" style={Object.assign({}, styles.slide, styles.slide1)}>
      Postgresql
    </div>
    <div className="stackSequelize" style={Object.assign({}, styles.slide, styles.slide2)}>
      Sequelize
    </div>
    <div className="stackExpress" style={Object.assign({}, styles.slide, styles.slide3)}>
      Express
    </div>
    <div className="stackReact" style={Object.assign({}, styles.slide, styles.slide3)}>
      React
    </div>
    <div className="stack" style={Object.assign({}, styles.slide, styles.slide3)}>
      Redux
    </div>
    <div className="stack" style={Object.assign({}, styles.slide, styles.slide3)}>
      Node.js
    </div>
    <div className="stack" style={Object.assign({}, styles.slide, styles.slide3)}>
      MUI Material
    </div>
    <div className="stack" style={Object.assign({}, styles.slide, styles.slide3)}>
      Socket.io
    </div>
  </SwipeableViews>
);

export default TechStack;
