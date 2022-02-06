import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * helper function that prevents react-router from pushing history
 * from same page twice -> aka user needing to click back icon multiple
 * times to go back into prev history
 */

const useLocationBlocker = () => {
  const history = useHistory();
  useEffect( () => {
    history.block((location, action) => {
      action !== "PUSH" || getLocationId(location) !== getLocationId(history.location)
    }),
    []
  });
}

const getLocationId = ({ pathname, search, hash }) => {
  return pathname + (search ? "?" + search : "") + (hash ? "#" + hash : "");
}

export default useLocationBlocker;
