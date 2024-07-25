import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRedirect = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-wrap gap-5 mt-5">
        {products.map((product, index) => (
          <Card style={{ width: "18rem" }} key={product.name + "-" + index}>
            <Card.Img variant="top" src={product.photo} />
            <Card.Body>
              <div className="card-title">
                <Card.Title>{product.name}</Card.Title>
              </div>
              <div className="cards-details">
                <Card.Text as="div">
                  {product.price} lei
                  <p>
                    {product.description}
                    {product.weigth}
                  </p>
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleRedirect(product.productIndex)}
                >
                  Citeste mai mult...
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
