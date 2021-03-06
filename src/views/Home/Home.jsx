import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar/NavBar";
import Dashboard from "./Dashboard/Dashboard";
import Chat from "../components/Chat/Chat";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <NavBar></NavBar>
        <Container fluid>
          <Row className="homeBody">
            <Col xl={9}>
              <Dashboard />
            </Col>

            <Col xl={3} >
              <div style={{position:"fixed"}}>
                <Chat />
              </div>
            </Col>
          </Row>
          <footer className="homeFooter aligmentFlexCenter">
            <Col>
              <ul className="sci">
                <li>
                  <a
                    href="https://html5test.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-html5"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tutorialrepublic.com/css-tutorial"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-css3"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-chrome"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </footer>
        </Container>
      </div>
    </>
  );
}
