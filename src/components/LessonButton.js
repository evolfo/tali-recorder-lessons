import React from 'react'
import {Button} from 'semantic-ui-react'

const LessonButton = () => {
    return (
      <Button
        id="canumeet-launcher"
        primary
        onClick={() => CanumeetEmbed.App.toggleApp(event)}
        aria-label="Book Lesson"
      >
        Book a Lesson Now
      </Button>
    );
}

export default LessonButton