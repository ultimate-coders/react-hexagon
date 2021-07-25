import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Button } from "react-bootstrap";
import React from "react";

function Reactions(props) {
  return (
    <>
        
      <div>
          <Button variant="light">
            <ThumbUpIcon  style={{ color: 'rgb(82, 148, 113)' }}/> Like
          </Button>
          <Button variant="light">
            <FavoriteIcon  style={{ color: 'rgb(82, 148, 113)' }}/> Love
          </Button>
          <Button variant="light">
            <ThumbDownIcon  style={{ color: 'rgb(82, 148, 113)' }}/> dislike
          </Button>
        </div>
        
    </>
  );
}

export default Reactions;

