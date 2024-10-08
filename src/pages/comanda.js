import { useContext, useState, useEffect } from "react";
import { Ctx } from "../context/store";
import { Button, Table, Spinner } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Comanda = () => {
  const [spinner, setSpinner] = useState(false);
  const { cartProducts, setCartProducts } = useContext(Ctx);
  const [groupedProducts, setGroupedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    groupProductsWithSameId();
  }, [cartProducts]);

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [groupedProducts]);

  const groupProductsWithSameId = () => {
    const grouped = cartProducts.reduce((acc, prod) => {
      if (acc[prod.id]) {
        acc[prod.id].count += 1;
      } else {
        acc[prod.id] = { ...prod, count: 1 };
      }
      return acc;
    }, {});
    setGroupedProducts(Object.values(grouped));
  };

  const incrementQuantity = (id) => {
    const tempArr = groupedProducts.map(obj => ({...obj}));
      const found = tempArr.find(prod => prod.id === id);
      found.count++;
      setGroupedProducts(tempArr);
  }
    

  const decrementQuantity = (id) => {
    const tempArr = groupedProducts.map(obj => ({...obj}));
    const found = tempArr.find(prod => prod.id === id);
    if(found.count === 0)return;
    found.count--;
    setGroupedProducts(tempArr);
  }


  const handleQuantityChange = (id, value) => {
    const tempArr = groupedProducts.map(obj => ({...obj}));
    const found = tempArr.find(prod => prod.id === id);
    found.count = value;
    setGroupedProducts(tempArr);
  };

  const getTotalPrice = () => {
    return groupedProducts.reduce(
      (acc, prod) => acc + prod.price * prod.count,
      0
    );
  };

  const formIsValid = (e) => {
    const name = e.target[0].value;
    const surname = e.target[1].value;
    const address = e.target[2].value;
    const phone = e.target[3].value;
    const email = e.target[4].value;
    const info = e.target[5].value;
    if (
      name &&
      name !== "" &&
      surname &&
      surname !== "" &&
      address &&
      address !== "" &&
      phone &&
      phone !== "" &&
      email &&
      email !== ""
    ) {
      return true;
    }
    toast.error("Completati toate câmpurile formularului.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    return false;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSpinner(true);
    if (formIsValid(e)) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            setCartProducts([])
            toast.success("Comanda a fost trimisă cu succes.", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          },
          (error) => {
            console.log(error.text);
            toast.error(
              "Comanda nu a putut fi trimisă, încercați mai târziu.",
              {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
          }
        )
        .catch((error) => {
          console.log(error);
          toast.error("Comanda nu a putut fi trimisă, încercați mai târziu.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .finally(() => {
          setSpinner(false);
        });
      e.target.reset();
    } else {
      setSpinner(false);
    }
  };


  console.log(groupedProducts)

  return (
    <>
      <ToastContainer />
      <div style={{ maxWidth: "60rem", margin: "auto" }}>
        {cartProducts && cartProducts.length > 0 && (
          <Table hover>
            <thead>
              <tr style={{ backgroundColor: "black", color: "white" }}>
                <th>Nr Buc.</th>
                <th>Nume</th>
                <th>Cantitate</th>
                <th>Pret</th>
              </tr>
            </thead>
            <tbody>
              {groupedProducts.map((prod) => (
                <tr key={prod.id}>
                  <td>
                    <button onClick={() => decrementQuantity(prod.id)}>
                      -
                    </button>
                    <input
                      type="number"
                      value={prod.count || 0}
                      onChange={(e) => handleQuantityChange(prod.id, e.target.value)}
                      style={{ width: "50px", textAlign: "center" }}
                    />
                    <button
                      onClick={() => incrementQuantity(prod.id)}
                      style={{
                        variant: "primary-outline",
                        className: "d-flex align-items-center gap-3",
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>{prod.name}</td>
                  <td>{prod.weight}</td>
                  <td>{prod.price * prod.count} Lei</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{totalPrice} Lei</td>
              </tr>
            </tbody>
          </Table>
        )}
        <div style={{ maxWidth: "60rem", margin: "auto" }}>
          {cartProducts.length === 0 ? <p>Coșul este gol.</p> : null}
        </div>
        <br />
      </div>
      <div
        style={{
          color: "darkgoldenrod",
          textAlign: "start",
          marginLeft: "1rem",
        }}
      >
        Comanda pe site
      </div>
      <br />
      <div style={{ maxWidth: "60rem", margin: "auto" }}>
        <form onSubmit={sendEmail}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Nume</label>
                </td>
                <td>
                  <input type="text" name="user_name" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Prenume</label>
                </td>
                <td>
                  <input type="text" name="user_prenume" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Adresa de livrare</label>
                </td>
                <td>
                  <input type="text" name="user_address" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Telefon</label>
                </td>
                <td>
                  <input type="text" name="user_phone" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <input type="email" name="user_email" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Informatii comanda </label>
                </td>
                <td>
                  <textarea
                    style={{ resize: "none", width: "100%" }}
                    name="message"
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Button
                    type="submit"
                    value="Send"
                    variant="primary-outline"
                    className="d-flex align-items-center gap-1"
                  >
                    <span>Trimite comanda</span>
                    {spinner && (
                      <Spinner animation="border" role="status" size="sm">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};
export default Comanda;
