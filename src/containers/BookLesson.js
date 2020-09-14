import React from 'react'
import { Grid, GridColumn, Card, Image, GridRow } from "semantic-ui-react"
import { Link } from "react-router-dom";
// import IframeResizer from "iframe-resizer-react";

import recorders from "../../img/recorders.jpg";
import BookBundleLesson from '../components/BookBundleLesson';

// This is a class to use ComponentDidMount for a loading of a script for the booking embed
class BookLesson extends React.Component {

  // This is for using CanUMeet
  // const resizeIframe = (e) => {
  //   const iframe = document.querySelector('iframe')
  // }

  state = {
    script: ""
  }

  componentDidMount = () => {
    const script = document.createElement("script");

    script.src = "https://www.appointletcdn.com/loader/loader.min.js";
    script.async = true;
    script.defer = true;

    this.setState({ script })

    document.body.appendChild(script);
  }

  handleBundleClick = () => {
    window.location.href = "https://www.talirecorderlessons.com/book-bundle"
    setTimeout(() => {
      window.location.reload();
    }, 200) 
  } 

  render() {
    return (
      <Grid id="book-lesson">
        <GridRow columns={2}>
          <div className="booking-container">
            <GridColumn>
              {/* <div className="booking-iframe-container">
                    <iframe
                      onClick={resizeIframe}
                      src="https://www.canumeet.com/talirecorderlessons"
                      width="100%"
                      height="100vh"
                      scrolling="no"
                    />
                  </div> */}

              <Card
                fluid={true}
                data-appointlet-organization="tali-recorder-lessons"
              >
                <Image src={recorders} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Book a Single Lesson</Card.Header>
                  <Card.Description>
                    Lessons can be 15 (free trial), 30, 45, or 60 minutes long.
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn>
              <Link to="/book-bundle" onClick={this.handleBundleClick}>
                <Card fluid={true}>
                  <Image src={recorders} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Purchase a Lesson Bundle</Card.Header>
                    <Card.Description>Get up to 20% off!</Card.Description>
                  </Card.Content>
                </Card>
              </Link>
            </GridColumn>
          </div>
        </GridRow>
      </Grid>
    );
  }
}

export default BookLesson