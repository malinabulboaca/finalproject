import React, { useRef } from "react";
import { useContext } from "react";
import { Ctx } from "../context/store";
import { Table } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Comanda = () => {
  const { cartProducts } = useContext(Ctx);

  const groupProductsWithSameId = () => {
    const newList = [];
    cartProducts.forEach((prod) => {
      const found = newList.find((obj) => obj.id === prod.id);
      if (found) {
        found.count++;
      } else {
        prod.count = 1;
        newList.push(prod);
      }
    });
    return newList;
  };

  const getTotalPrice = () => {
    return cartProducts.reduce((acc, obj) => (acc += obj.price), 0);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3avok8a",
        "template_eeecyct",
        e.target,
        "cODjN-QH-P91dg-kh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  //https://www.emailjs.com/

  return (
    <>
      <div style={{ color: "darkgoldenrod" }}>Check out</div>
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
              {groupProductsWithSameId().map((prod) => (
                <tr>
                  <td>{prod.count}</td>
                  <td>{prod.name}</td>
                  <td>{prod.weigth}</td>
                  <td>{prod.price * prod.count}Lei</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{getTotalPrice()}Lei</td>
              </tr>
            </tbody>
          </Table>
        )}
        <br />
      </div>
      <div style={{ color: "darkgoldenrod", textAlign: "start" }}>
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
                  <textarea style={{ resize: "none" }} name="message" />
                </td>
                <td>
                  <input type="submit" value="Send" />
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
