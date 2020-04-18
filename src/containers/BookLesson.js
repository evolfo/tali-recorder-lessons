import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react"
import IframeResizer from "iframe-resizer-react";

const BookLesson = () => {

  const resizeIframe = (e) => {
    const iframe = document.querySelector('iframe')
    console.log('hi')
  }

  return (
    <Grid id="book-lesson">
      <GridColumn width={16}>
        <div className="booking-iframe-container">
          <iframe
            onClick={resizeIframe}
            src="https://www.canumeet.com/talirecorderlessons"
            width="100%"
            height="100vh"
            scrolling="no"
          />
        </div>
      </GridColumn>
    </Grid>
  );
}

export default BookLesson