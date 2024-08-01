import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Chip } from '@mui/material';
import styles from './Card.module.css'
function CardCompo({ele}){
    let {follows,image,title} = ele;

  return (
    <Card sx={{ maxWidth: 200,backgroundColor:'black'}} className={styles.card} >
       <CardActionArea sx={{backgroundColor:'black'}} >
       <CardMedia
          component="img"
          height="180"
          image={image}
          alt="green iguana"
        />
        <CardActions sx={{height:30,borderEndStartRadius:12,borderEndEndRadius:12}} className={styles.main} >
           <Chip label={ele.likes?`${ele.likes} Likes`:`${follows} follows`} className={styles.chip}/>
        </CardActions>
       </CardActionArea>
       <CardActions>
          <Typography sx={{color:'white',fontSize:14}}>{title}</Typography>
       </CardActions>
    </Card>
  );
}
export default CardCompo;