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
          <CenteredHeader>React and Redux</CenteredHeader>
        </div>
        <ul>
          <li>
            <a href="https://medium.com/@info_4440/why-use-redux-with-react-da4f16d03444" target="_blank">Why use Redux with your React Projects</a>
            <Date>July 5th, 2018</Date>
          </li>
          <li>
            <a href="https://medium.com/rachnas-blog/styling-in-react-e496244acbce" target="_blank">Styling in React</a>
            <Date>July 6th, 2018</Date>
          </li>
          <li>
            <a href="https://medium.com/rachnas-blog/testing-in-react-a55c98c03430" target="_blank">Testing in React with Jest and Enzyme</a>
            <Date>July 8th, 2018</Date>
          </li>
          <li>
            <a href="https://medium.com/rachnas-blog/higher-order-components-in-react-80259d5ec3a9" target="_blank">How to create a Higher Order Component in React</a>
            <Date>July 9th, 2018</Date>
          </li>
        </ul>
        <div>
        <br />
          <CenteredHeader>Blockchain and Ethereum</CenteredHeader>
        </div>
        <ul>
          <li>
            <a href="https://medium.com/blockchain-fundamentals/stories/published" target="_blank">Ethereum /Blockchain History and Basics</a>
            <Date>July 11th, 2018</Date>
          </li>
        </ul>
        <br />
        <div>
          <CenteredHeader>Read more on <a href="https://medium.com/rachnas-blog/stories/published" target="_blank"><i className="fa fa-medium fa-fw" />Medium</a>.</CenteredHeader>
        </div>
      </div>
    );
  }
}

export default Writing;
