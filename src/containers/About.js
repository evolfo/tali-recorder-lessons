import React from 'react'
import { Grid, GridColumn, Image, Header, Container, Embed } from "semantic-ui-react";

import aboutImg from "../../img/about-img.jpg";
import aboutImg2 from "../../img/about-img2.jpg";
import placeholderVid from "../../img/placeholder-vid.jpg"

const About = () => {
    return (
      <div id="about-wrapper">
        <Grid centered id="about">
          <GridColumn stretched="true" tablet={16} computer={9} className="about-text">
            <Header>About Tali</Header>
            <p>
              Like most kids, Tali began playing the recorder in 2nd grade. Unlike
              most, she never stopped. 
            </p>
            <p>
              Tali was
              professionally trained in classical baroque and renaissance music
              from a young age. She studied in prestigious music schools in
              Israel (Thelma Yellin High School of the Arts, Rimon School) and
              received a full scholarship to attend Berklee
              College of Music in Boston, where she became the first recorder player
              to ever study there. Winning numerous awards throughout her career, Tali has
              established herself in jazz, pop and R&amp;B music, exploring and
              challenging the boundaries of this ancient baroque instrument.
            </p>
            <p>
              Tali has taught private lessons and workshops all around the world,
              for all levels of recorder players. While in Israel, Tali taught
              for two years at the Neve Sharet
              Conservatory in Tel Aviv, and since moving to the US she’s been
              teaching privately in NYC for over five years.
            </p>
            <p>
              Tali has given workshops in the US (Carnegie Hall), Germany (Frankfurt University of Music and Performing
              Arts), Israel (Israel International Recorder Festival), The
              Philippines (UP College of Music, Philippine
              Women’s University, University of Santo Tomas and New Era
              University), Taiwan (Tsing Hua University), Uruguay (Jazz a la Calle festival) and Spain (Colegio Decroly).
            </p>
          </GridColumn>
          <GridColumn stretched="true" className="about-img" tablet={16} computer={7}>
            <div id="about-card">
              <Image src={aboutImg} />
              <Image src={aboutImg2} />
            </div>
          </GridColumn>
        </Grid>
        <Container className="about-vid">
          <Embed
            id="lMFN3UKNBh8"
            placeholder={placeholderVid}
            source="youtube" />
        </Container>
      </div>
    );
}

export default About