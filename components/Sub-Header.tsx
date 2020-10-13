import { makeStyles, Paper, Grid, Typography,Link } from '@material-ui/core';
// import Link from 'next/link';
import React from 'react'
const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }));



export const SubHeader = () => {
    const classes = useStyles();
    const profile = {
        name : 'Krunal Parmar',
        image : 'https:\\images.test',
        imageText : 'Krunal',
        title: 'Fullstack Developer',
        description:'Hi, I have 15+ years of experience in application development using various technologies.',
        linkText:"Read more about my profile..."
    }
    return (

        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${profile.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={profile.image} alt={profile.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {profile.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {profile.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {profile.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
    )
}
