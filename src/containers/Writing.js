import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const Date = styled.p`
  font-size: 12px;
`

class Writing extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>I write about tech and fitness related topics.</CenteredHeader>
        </div>
        <h5>Tech-related:</h5>
        <ul>
          <li>
            <a href="https://medium.com/@info_4440/why-use-redux-with-react-da4f16d03444" target="_blank">Why use Redux with your React Projects</a>
            <Date>July 5th, 2018</Date>
          </li>
          <li>
            <a href="https://medium.com/rachnas-blog/styling-in-react-e496244acbce" target="_blank">Styling in React</a>
            <Date>July 6th, 2018</Date>
          </li>
        </ul>
        <h5>Other:</h5>
        <ul>
          <li>
            <a href="" target="_blank"></a>
            <Date></Date>
          </li>
        </ul>
        <div>
          <CenteredHeader>Read more on <a href="https://medium.com/rachnas-blog/stories/published" target="_blank"><i className="fa fa-medium fa-fw" />Medium</a>.</CenteredHeader>
        </div>
      </div>
    );
  }
}

export default Writing;
