import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { products } from "../data/products";

const Home = () => {
    return (
        <div>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
                {products.map((product) => (
                    <Card style={{ width: "18rem" }} key={product.name}>
                        <Card.Img variant="top" src={product.photo} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                                {product.price}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Home;
