import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Zoom from "react-reveal/Zoom";

import Card from "./Card";
import zshop from "../assets/images/zshop.jpg";
import flipcard from "../assets/images/flipcard.png";
import currency from "../assets/images/currency.jpeg";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Zdress",
          subTitle: "e-commerce shop",
          imgSrc: zshop,
          link: "https://github.com/M-Sobh/shopping-cart.git",
          //   demo needs to be filled
          demo: "",
          selected: false
        },
        {
          id: 1,
          title: "Flipping card",
          subTitle: "Memory game",
          imgSrc: flipcard,
          link: "https://github.com/M-Sobh/card_game.git",
          demo: "",
          selected: false
        },
        {
          id: 2,
          title: "Your Wallet",
          subTitle: "Currency converter",
          imgSrc: currency,
          link: "https://github.com/M-Sobh/currency-converter.git",
          demo: "",
          selected: false
        }
      ]
    };
  }
  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;
    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items
    });
  };
  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };
  render() {
    return (
      <Zoom>
        <Container fluid={true} className="carousel">
          <Row className="justify-content-around">
            {this.makeItems(this.state.items)}
          </Row>
        </Container>
      </Zoom>
    );
  }
}
