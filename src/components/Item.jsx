import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, img, name }) => {
  return (
    <>
      <div className="cardParentContainer">
        <div className="cardChildContainer" key={id}>
          <Card style={{ width: "20rem" }}>
            <Card.Img className="cardImage" variant="top" src={img} />
            <Card.Body>
              <Card.Title className="cardTitle">{name}</Card.Title>
              <Button className="cardButton" variant="primary">
                <Link className="cardDetails" to={`/item/${id}`}>
                  Details
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Item;
