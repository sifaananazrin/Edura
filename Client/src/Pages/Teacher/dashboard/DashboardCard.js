import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cardWithImageStyles from './CardsImageStyle';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';



function CardWithImage({ title, description, imageUrl }) {
  const classes = cardWithImageStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageUrl}
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.description} variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function CardList() {
  return (
    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <div>
        <CardWithImage
          title="Create an Engaging Course"
          description="
          Create an Engaging Course
          Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.."
          imageUrl="https://th.bing.com/th/id/OIP.nESUKY-r6jZEbjPnqSHPaAHaEJ?pid=ImgDet&w=811&h=455&rs=1"
        />
        <CardWithImage
          title="earn"
          description="Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting."
          imageUrl="https://assets.website-files.com/5e79d9bc743cefe74e32cdc6/6062f3e50351e753587b55d7_as-soon-as-nuke-p-500.png"
        />
        <CardWithImage
          title="Featur thinks"
          description="Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting."
          imageUrl="https://www.smoney.com.au/wp-content/uploads/2020/01/how-much-need.png?x44096"
        />
        {/* <CardWithImage
          title="Card 4"
          description="This is the description for card 4."
          imageUrl="https://source.unsplash.com/random/400x400/?technology"
        /> */}
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div>
      <CardList />
      <Footer />

    </div>
  );
}
