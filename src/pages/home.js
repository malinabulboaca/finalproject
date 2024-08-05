import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { products } from "../data/products";
import { IoMdCart } from "react-icons/io";
import { Ctx } from "../context/store";
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();
  const { setCartProducts } = useContext(Ctx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRedirect = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleAddToCart = (product) => {
    setCartProducts(state => {
      return [...state, product]
    })
    toast.success(`${product.name} a fost adăugat în coș.`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    })
  }

  return (
    <div className="container">
      <ToastContainer />
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
                <div className="d-flex justify-content-between align-items-center">
                  <button className="custom-icon-btn" onClick={() => handleAddToCart(product)}><IoMdCart size="1.5rem" /></button>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleRedirect(product.productIndex)}
                  >
                    Citeste mai mult...
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
