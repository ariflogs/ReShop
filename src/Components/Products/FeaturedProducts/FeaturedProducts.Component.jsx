import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Image,
  Table,
  Button,
  Responsive,
  Segment
} from "semantic-ui-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { addProductAction } from "../../../redux/products/productAction";
import "./featured-products.style.scss";

const FeaturedProducts = ({ addItem, featuredItems, addedItems }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const imgSize = window.innerWidth < 600 ? "tiny" : "medium";
  console.log(window.innerWidth);

  return (
    <div className="featured-products">
      <Container>
        <Slider {...settings}>
          {featuredItems.map(item => {
            const addedItem = addedItems.find(aItem => aItem.id === item.id);

            return (
              <div className="featured-product" key={item.id}>
                <Image src={item.imgUrl} alt={item.title} size={imgSize} />
                <div className="content">
                  <h1 className="product-title">{item.title}</h1>
                  <h2 className="product-price">
                    $ {item.price}
                    <sup>{addedItem ? " x " + addedItem.quantity : ""}</sup>
                  </h2>
                  <span className="quantity"></span>
                  <Responsive as={Segment} minWidth={768}>
                    <Table definition>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell width={2}>Author</Table.Cell>
                          <Table.Cell>{item.author}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Publisher</Table.Cell>
                          <Table.Cell>{item.publisher}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Length</Table.Cell>
                          <Table.Cell>{item.length}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Language</Table.Cell>
                          <Table.Cell>{item.language}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Responsive>

                  <Button secondary onClick={() => addItem(item)}>
                    Add To Chart
                  </Button>
                </div>
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  featuredItems: products.featuredItems,
  addedItems: products.addedItems
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addProductAction(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedProducts);
