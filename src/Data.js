import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Addtocart } from './Addtocart';
export function Data(props) 
{
  const [itemCount, setItemCount] = React.useState(1);
        return (
      <div className='Card'>
         
           <Card sx={{ maxWidth:290,maxHeight:550 }}>
      <CardMedia c
        component="img"
        height="380"
        src={props.proData.img}
               alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.proData.name}
        </Typography>
             </CardContent>
      <CardActions>
    <Addtocart />
          </CardActions>
    </Card>
            </div>
    );
  }
  