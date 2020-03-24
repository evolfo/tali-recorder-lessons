import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react"

const BookLesson = () => {
  return (
    <Grid id="book-lesson">
      <GridColumn width={16}>
        <iframe src="https://talirecorder.setmore.com" scrolling="no" width="100%" height="100%" frameborder="0"></iframe>
      </GridColumn>
    </Grid>
  )
}

export default BookLesson