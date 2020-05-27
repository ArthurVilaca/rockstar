import React from 'react';

import Details from '../details'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  media: {
    width: 200,
    height: 300
  },
  card: {
    width: 200,
    height: 400
  },
  title: {
    textAlign: 'center'
  }
}));

function ListItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={'https://image.tmdb.org/t/p/h632' + props.movie.backdrop_path} title={props.movie.title} />
      <CardContent className={classes.title}>
        { props.movie.title }
      </CardContent>
      <CardActions>
        <Details movie={props.movie} />
      </CardActions>
    </Card>
  )
}

export default ListItem;