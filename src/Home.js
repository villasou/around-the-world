import * as React from "react";

import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import beach from "./images/images.jpeg";
import tours from "./images/tours.jpeg";
import places from "./images/places.jpeg";
import { CardBody, CardSubtitle, CardGroup, Button } from "reactstrap";
import hotel from "./images/hotel.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <h1>Around the world</h1>
      <Card inverse>
        <CardImg alt="Card image cap" src={beach} width="100%" />
        <CardImgOverlay>
          <CardTitle tag="h1">TRAVEL</CardTitle>
          <CardText tag="h2">
            we travel not to escape life but for life not to escape us
          </CardText>
        </CardImgOverlay>
      </Card>
      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={hotel} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Hotels</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              find great prices
            </CardSubtitle>
            <CardText>see hotel ratings</CardText>
            <Button onClick={() => navigate("/hotels")}>more info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={tours} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Tours</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              learn about new cultures and areas
            </CardSubtitle>
            <CardText>see recommended tour guides</CardText>
            <Button onClick={() => navigate("/birria")}>more info </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={places} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Places</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              travel to your dream world
            </CardSubtitle>
            <CardText>look at prices and times for flights</CardText>
            <Button onClick={() => navigate("/torta")}>more info</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
