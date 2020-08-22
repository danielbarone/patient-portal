import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './Home.styles';

const Home = (props) => {
  const classes = useStyles(props);
  const session = useSelector((state) => state.session);

  return session ? (
    <div>
        <h1 className={classes.header}>Welcome to your Patient Portal!</h1>
    </div>
  ) : (
    <div>
        <h1 className={classes.header}>Welcome to Your Patient Portal!</h1>
        <h3 className={classes.header}>Please sign in to continue.</h3>
    </div>
  );
};

export default Home;
