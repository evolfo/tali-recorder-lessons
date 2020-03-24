import React from 'react'
import { Grid, GridColumn, Image, Card, CardContent } from "semantic-ui-react";

import aboutImg from "../../img/about-img.jpg";

const About = () => {
    return (
      <Grid centered id="about">
        <GridColumn tablet={16} computer={8}>
          <div id="about-card">
            <Image src={aboutImg} />
          </div>
        </GridColumn>
        <GridColumn tablet={16} computer={8} className="about-text">
          <p>
            Like most kids, Tali began playing the recorder in 2nd grade. Unlike
            most, she never stopped. A student of Bracha Kol, Tali was
            professionally trained in classical baroque and renaissance music
            from a young age. She studied in prestigious music institutions in
            Israel (Thelma Yellin High School of the Arts, Rimon School) and
            later received a full tuition scholarship to attend the Berklee
            College of music in Boston and became the first recorder player ever
            to study there. She was chosen to represent Berklee at the John F.
            Kennedy Center for the Performing Arts, and upon graduation,
            received the W.S. Kenney award for outstanding achievement. Tali has
            established herself in jazz, pop and R&amp;B music, exploring and
            challenging the boundaries of this ancient baroque instrument.
          </p>
          <p>
            Tali has taught private lessons and workshops all around the world,
            for all levels of recorder players. While in Israel, Tali taught
            private recorder lessons for kids for two years at the Neve Sharet
            Conservatory in Tel Aviv, and since moving to the US she’s been
            teaching privately in NYC for over five years.
          </p>
          <p>
            Tali has given workshops in the US (including a seminar for recorder
            teachers at part of Carnegie Hall’s Link Up program, as well as a
            workshop at Carnegie Hall’s Studio 57, and a workshop for elementary
            school students at The Ramaz School), Germany (a three-day seminar
            for recorder majors at Frankfurt University of Music and Performing
            Arts), Israel (at the Israel International Recorder Festival), The
            Philippines (workshops at the UP College of Music, Philippine
            Women’s University, University of Santo Tomas and New Era
            University), Taiwan (at Tsing Hua University), Uruguay (a free
            workshop for teens as part of Jazz a la Calle festival) and Spain (a
            workshop for elementary school students at Colegio Decroly).
          </p>
        </GridColumn>
      </Grid>
    );
}

export default About