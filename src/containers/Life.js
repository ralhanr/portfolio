import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const LifeRow = styled.div`
  margin: 20px -15px;
`

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Ever since I can remember, I have been interested in all facets of being fit. As a teenager, I worked hard at being thin. As a young adult, I worked hard at being stronger and after much effort I did achieve my goals. Now my goal is to make everyone I come in contact with, healthy. I do this on my radio show, at my club and with my friends and family.

So why is it so hard for people to lose weight. There is a not so secret secret of weight loss.
<br /> <br />
Expert Focus <br /><br />
I know the secret to weight loss: It is giving people Sincere Motivation. I motivate everyone with good technical information, a fun environment & using Myself as an example.
<br /> <br />
Favorite Exercises <br /> <br />
Just about everything, but definitely Abs and Core Training is my focus.
<br /> <br />
Education
<br /> <br />
After getting my Masters in Software Engineering and working for a few years, I was presented with a choice. I had to decide to take a promotion that would require me to travel all over the world or relocate to another state. I decided that neither were good enough. So I decided to finally put my effort into what had been my Calling: HEATLH & FITNESS.
<br /> <br />
My passion was met by an opportunity, and Rachna's Wellness Center was created.
Experience
I have an experience of more than 12 years in doing what I am doing. I keep myself in peak physical condition to lead by example. If I ask you to do 50 crunches, I make sure I can do 500. If I ask you to do 100 lunges, I make sure I can do 1000. I have clients who at the age of 65 are doing bollywood cardio classes with me. How can you not be motivated in an environment like this?

The path to being fit is not difficult, if you want to do it, but impossible if you don't want to.
<br /> <br />
Rachna.
<br /> <br />
</CenteredHeader>
        </div>
        {/*Row 1*/}
        <LifeRow className="row">
          <div className="col-md-6 col-sm-12">
            <a href="http://rachnaradio.com" target="_blank">
              <LifeThumbnail src="http://i66.tinypic.com/33usqw5.jpg"/>
              <LifeHeader>My Fitness Passion</LifeHeader>
            </a>
            <LifeProjectBlurb>Here's a litte about my Fitness Passion!</LifeProjectBlurb>
          </div>
          <div className="col-md-6 col-sm-12">
            <a href="https://github.com/ralhanr" target="_blank">
              <LifeThumbnail src="http://i59.tinypic.com/2h3ynms.jpg"/>
              <LifeHeader>My Coding Passion</LifeHeader>
            </a>
            <LifeProjectBlurb>My another passion is to keep learning constantly. I love to code and learn new programming languages.</LifeProjectBlurb>
          </div>
        </LifeRow>
        {/*Row 2*/}

      </div>
    );
  }
}

export default Life;
