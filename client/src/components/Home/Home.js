import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './Home.styles';

const Home = (props) => {
  const classes = useStyles(props);
  const session = useSelector((state) => state.session);

  return session ? (
    <div>
        <h1 className={classes.header}>Logged in.</h1>
    </div>
  ) : (
    <div>
        <h1 className={classes.header}>Not logged in.</h1>
    </div>
  );
};

export default Home;
