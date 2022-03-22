import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
export function Addtocart() {
  const [like, setLike] = useState(0);
    return (
    <div className="counter-container">
      <IconButton className="Like-dislike" aria-label="like" color="primary"
        onClick={() => {
          setLike(like + 1);
          //console.log(like);
        }}>
        <Badge badgeContent={like} color="primary">
          Add to cart
        </Badge>
      </IconButton>
   
    </div>
  );
}