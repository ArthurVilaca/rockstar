import React from 'react';
import ListItem from '../listItem'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50
  }
}));

export default function List(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          props.movies.map((movie) => {
            return (
              <Grid item xs={3} key={movie.id}>
                <ListItem movie={movie} key={movie.id} />
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}
