import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Details(prop) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          { prop.movie.original_title }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>Rating: { prop.movie.vote_average }</div>
            <div>Votes: { prop.movie.vote_count }</div>
            <div>Release date: { prop.movie.release_date }</div>
            <div>Overview: { prop.movie.overview }</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}