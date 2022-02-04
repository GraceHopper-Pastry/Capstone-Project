import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from '@mui/material';
import { withStyles } from '@mui/styles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
  },
  cardHightlighted: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    backgroundColor: theme.palette.secondary.light,

  },
  title: {
    color: theme.palette.common.grey
  }
});

function OfferCard(props) {
  const { classes, theme, title, features, highlighted, pricing } = props;
  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h5" : "h6"}
          className={highlighted ? "text-white" : classes.title}
        >
          {title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h3" : "h4"}
          className={highlighted ? "text-white" : null}
        >
          {pricing}
        </Typography>
      </Box>
      {features.map((feature, index) => (
        <Box display="flex" alignItems="center" mb={1} key={index}>
          <LocalOfferIcon
            style={{
              color: highlighted
                ? theme.palette.common.white
                : theme.palette.primary.dark
            }}
          />
          <Box ml={1}>
            <Typography
              className={highlighted ? "text-white" : null}
              variant={highlighted ? "h6" : "body1"}
            >
              {feature}
            </Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
}

OfferCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(OfferCard);
