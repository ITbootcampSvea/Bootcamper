import React from "react";
import {
  Card,
  InputGroup,
  FormControl,
  CardDeck,
  Row,
  Col,
} from "react-bootstrap";
import DashCard from "../Dashboard/DashCard/DashCard";
import DashCardModal from "../Dashboard/DashCardModal/DashCardModal";
import CreateDashCardModal from "../Dashboard/CreateDashCardModal/CreateDashCardModal";
import plussign from "../../img/plussign.png";

export default function Dashboard() {
  let date = new Date();
  let dayNumber = date.getDate();
  let month = date.getMonth();
  let dayName = date.toLocaleString("en-US", { weekday: "long" });
  let monthName = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();

  const [searchTerm, setSearchTerm] = React.useState("");

  const [modalShow, setModalShow] = React.useState(false);
  const [createModalShow, setCreateModalShow] = React.useState(false);
  const [modalDataIndex, setModalDataIndex] = React.useState(0);

  const [searchResultNumber, setSearchResultNumber] = React.useState(0);

  React.useEffect(() => {
    let results = [];

    if (searchTerm == "") {
      results = data;
    } else {
      results = searchResults.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setSearchResults(results);
  }, [searchTerm]);

  let data = [
    {
      date: "4 7 2020",
      time: "10:40",
      title: "Javascript tutorial",
      author: "Cvijan Peranovic",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam adipisci esse corrupti veritatis, quisquam architecto exercitationem illum ipsam soluta dolores, natus reprehenderit in vero laboriosam, maxime repellendus consectetur molestiae.Delectus sed recusandae doloribus non nemo necessitatibus, esse obcaecati quisquam corrupti possimus asperiores eius nostrum vel, assumenda saepe ipsum, est voluptate magnam illum maxime pariatur?",
      links: [],
    },
    {
      date: "4 7 2020",
      time: "12:17",
      title: "While loop",
      author: "Dusan Bobicic",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam adipisci esse corrupti veritatis, quisquam architecto exercitationem illum ipsam soluta dolores, natus reprehenderit in vero laboriosam, maxime repellendus consectetur molestiae.Delectus sed recusandae doloribus non nemo necessitatibus, esse obcaecati quisquam corrupti possimus asperiores eius nostrum vel, assumenda saepe ipsum, est voluptate magnam illum maxime pariatur?",
      links: [],
    },
    {
      date: "4 7 2020",
      time: "13:05",
      title: "Node.js",
      author: "Cvijan Peranovic",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam adipisci esse corrupti veritatis, quisquam architecto exercitationem illum ipsam soluta dolores, natus reprehenderit in vero laboriosam, maxime repellendus consectetur molestiae.Delectus sed recusandae doloribus non nemo necessitatibus, esse obcaecati quisquam corrupti possimus asperiores eius nostrum vel, assumenda saepe ipsum, est voluptate magnam illum maxime pariatur?",
      links: [],
    },
    {
      date: "4 7 2020",
      time: "12:17",
      title: "Redux",
      author: "Dusan Bobicic",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam adipisci esse corrupti veritatis, quisquam architecto exercitationem illum ipsam soluta dolores, natus reprehenderit in vero laboriosam, maxime repellendus consectetur molestiae.Delectus sed recusandae doloribus non nemo necessitatibus, esse obcaecati quisquam corrupti possimus asperiores eius nostrum vel, assumenda saepe ipsum, est voluptate magnam illum maxime pariatur?",
      links: [],
    },
  ];

  const [searchResults, setSearchResults] = React.useState(data);

  const handleChange = (e) => {
    setSearchTerm(e);
  };

  const cardStyle = {
    height: "15rem",
    padding: "0.5rem",
    textAlign: "center",
  };

  return (
    <div className="container">
      <Row>
        <Col xl={12}>
          <Row>
            <Col xl={6}>
              <InputGroup className="searchBar">
                <FormControl
                  placeholder="What would you like to find?"
                  aria-label="Search dashboard"
                  aria-describedby="basic-addon2"
                  id="searchInput"
                  onChange={(e) => handleChange(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
          <Card>
            <div className="calendar">
              <label className="calendarLbl">{monthName}</label>
              <label className="calendarLbl">{dayName}</label>
              <label className="calendarLbl">{dayNumber}</label>
              <label className="calendarLbl">{year}</label>
            </div>
            <br></br>
            <CardDeck>
              {searchResults.length > 0 ? (
                searchResults.map((single, index) => (
                  <Col xl={4} key={index}>
                    <Card
                      style={cardStyle}
                      onClick={() => {
                        setModalShow(true);
                        setModalDataIndex(index);
                      }}
                    >
                      <DashCard singleCard={single} />
                    </Card>
                    <br></br>
                  </Col>
                ))
              ) : (
                <Card>
                  <Card.Title style={{ textAlign: "center", margin: "auto" }}>
                    No results!
                  </Card.Title>
                </Card>
              )}

              {searchTerm === "" ? (
                <Col sd={4} xl={4}>
                  <Card
                    style={cardStyle}
                    onClick={() => {
                      setCreateModalShow(true);
                    }}
                  >
                    <div style={{ margin: "auto" }}>
                      <Card.Img
                        style={{ height: "8rem", width: "8rem" }}
                        src={plussign}
                      />
                    </div>
                  </Card>
                </Col>
              ) : (
                ""
              )}
            </CardDeck>
          </Card>

          {searchResults.length > 0 ? (
            <DashCardModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              singlemodal={searchResults[modalDataIndex]}
            />
          ) : (
            ""
          )}

          <CreateDashCardModal
            show={createModalShow}
            onHide={() => setCreateModalShow(false)}
            setcarddata={setSearchResults}
            carddata={searchResults}
          />
        </Col>
      </Row>
    </div>
  );
}
