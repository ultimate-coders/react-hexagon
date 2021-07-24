import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Button } from "react-bootstrap";
import React from "react";
import Reactions from './rrr'

function Like(props) {
  let isHidden = false
  return (
    <>

      <div>
        
        <div>
          {console.log('line 13',isHidden)}
          <Button variant="light" onMouseEnter={()=>{ isHidden = true}}>
            <ThumbUpIcon style={{ color: 'rgb(82, 148, 113)' }}/> Like
          </Button>
          {console.log('line 17',isHidden)}

        </div>
        {!isHidden?<Reactions/>:''}
        
      </div>
     
    </>
  );
}

export default Like;
