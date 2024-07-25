import { useContext } from "react";
import { Ctx } from "../context/store";
import { Table } from "react-bootstrap";

const Comanda = () => {
    const { cartProducts } = useContext(Ctx);

    const groupProductsWithSameId = () => {
        const newList = []
        cartProducts.forEach(prod => {
            const found = newList.find(obj => obj.id === prod.id);
            if(found){
                found.count++;
            }
            else {
                prod.count = 1;
                newList.push(prod);
            }
        })
        return newList;
    }

    const getTotalPrice = () => {
        return cartProducts.reduce((acc, obj) => acc += obj.price, 0);
    }

    //https://www.emailjs.com/

    return (
        <>
            <div>Check out</div>
            <div style={{maxWidth: "60rem", margin: "auto"}}>
            {(cartProducts && cartProducts.length > 0) && <Table hover>
                <thead>
                    <tr style={{backgroundColor: "black", color: "white"}}>
                        <th>Nr Buc.</th>
                        <th>Nume</th>
                        <th>Cantitate</th>
                        <th>Pret</th>
                    </tr>
                </thead>
                <tbody>
                    {groupProductsWithSameId().map(prod => (
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
            </Table>}
            </div>
        </>
    )
}

export default Comanda;