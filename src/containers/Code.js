import React, { Component } from "react";
import styled from "styled-components";

import { CenteredHeader } from "./App.js";
import { ColorScheme } from "../theme/styleConstants";

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>Skills:</CenteredHeader>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Front-end:</h5>
              <ul>
                <li>Ethereum Blockchain</li>
                <li>Solidity</li>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>Material-UI/Semantic UI</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Back-end:</h5>
              <ul>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>Next JS</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <h5>Other:</h5>
              <ul>
                <li>Git</li>
                <li>Webpack</li>
                <li>JSON</li>
                <li>Mocha/Chai/Jest Testing</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <CenteredHeader>Recent work:</CenteredHeader>
          <PortRow>
            <a href="https://rrrobofriends.herokuapp.com/" target="_blank">
              <CodeThumbnail src={require("../assets/screenshot_robofriends.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Robofriends</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://rrrobofriends.herokuapp.com/" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/ralhanr/Roboform-Redux"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>

            </PortDescription>
              <PortDescription>

            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Tachyons</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
          <PortRow>
            <a href="https://myweatherfinder.herokuapp.com/" target="_blank">
              <CodeThumbnail src={require("../assets/weatherfinder.png")} />
            </a>
            <PortAllText>
              <PortTitleContainer>
                <PortTitle>Robofriends</PortTitle>
                <PortButtonContainer>
                  <PortButton href="https://myweatherfinder.herokuapp.com/" target="_blank">
                    Demo
                </PortButton>
                  <PortButton
                    href="https://github.com/ralhanr/WeatherFinder"
                    target="_blank"
                  >
                    Code
                </PortButton>
                </PortButtonContainer>
              </PortTitleContainer>
              <PortDescription>

            </PortDescription>
              <PortDescription>

            </PortDescription>
              <UsedList>
                <UsedItem>React.js</UsedItem>
                <UsedItem>Redux</UsedItem>
                <UsedItem>Remote API Fetch</UsedItem>
              </UsedList>
            </PortAllText>
          </PortRow>
        </div>
      </div>
    );
  }
}

export default Code;
