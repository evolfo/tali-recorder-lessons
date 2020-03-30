import React from "react";
import {Grid, GridColumn, Header, Button} from "semantic-ui-react";
import Carousel from "semantic-ui-carousel-react";
import {Link} from 'react-router-dom'
import elements from '../utilities/carousel-elements'

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Grid id="main-background">
          <GridColumn className="tablet-display-none" tablet={0} computer={8}></GridColumn>
          <GridColumn tablet={16} computer={8} className="main-about-text">
            <Header className="centered-text">
              Learn Recorder with&nbsp;Tali!
            </Header>
            <p className="centered-text">
              Ever wondered – “Can I actually play that on a&nbsp;recorder?”
            </p>
            <p className="centered-text">
              The answer is – yes. NYC based Award-winning recorder player Tali
              Rubinstein will teach you&nbsp;how.
            </p>
            <Link to="/book-lesson">
              <Button primary>Book a Lesson Now</Button>
            </Link>
          </GridColumn>
        </Grid>
        <Grid id="tutorial-videos">
          <Header className="main-about-text video-header">
            See Tali in Action
          </Header>
          <GridColumn tablet={16} computer={8}>
            <div class="iframe-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/AUeUZdfiuJ0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </GridColumn>
          <GridColumn tablet={16} computer={8}>
            <div class="iframe-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/6YTo9RjX6j8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </GridColumn>
        </Grid>
        <Grid centered id="testimonials">
          <div className="testimonial-background-color">
            <Header className="main-about-text testimonials-header">
              Testimonials
            </Header>
            <GridColumn className="testimonials-text" computer={12} tablet={16}>
              <Carousel
                elements={elements}
                animation="slide left"
                showNextPrev={false}
                showIndicators={true}
              />
            </GridColumn>
          </div>
        </Grid>
      </>
    );
  }
}

export default HomePage