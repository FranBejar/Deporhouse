import { useState } from "react";
import Button from "../../../components/Button/Button";
import Swal from "sweetalert2";

const Orders = ({ handleConfirm }) => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        dni: "",
        email: "",
        confirmEmail: "",
        phone: "",
        address: "",
        cardNumber:"",
        cardExpiryMonth:"",
        cardExpiryYear:"",
        cardCVV:""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const cardExpiry = userData.cardExpiryMonth + "/" + userData.cardExpiryYear;

        const cardNumberRegex = /^[0-9]{16}$/;
        if (!cardNumberRegex.test(userData.cardNumber)) {
            Swal.fire({
                icon: 'error',
                title: "El número de tarjeta debe tener exactamente 16 dígitos"
            })
            return;
        }

        const cardCVVRegex = /^[0-9]{3}$/;
        if(cardCVVRegex.test(userData.cardCVV)){
            Swal.fire({
                icon: 'error',
                title: "El CVV de tarjeta debe tener exactamente 3 dígitos"
            })
            return;
        }

        if (userData.email !== userData.confirmEmail) {
            Swal.fire({
                icon: 'error',
                title: "Los correos electrónicos no coinciden"
            })
            return;
        }
        handleConfirm({...userData,cardExpiry});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grupo">
            <div className="campoForm">
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Nombre"
                    value={userData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="campoForm">
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Apellido"
                    value={userData.lastName}
                    onChange={handleChange}
                />
            </div>
            </div>
            <div className="campoForm">
                <input
                    type="number"
                    id="dni"
                    name="dni"
                    placeholder="DNI"
                    value={userData.dni}
                    onChange={handleChange}
                />
            </div>
            <div className="grupo">
            <div className="campoForm">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-Mail"
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="campoForm">
                <input
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    placeholder="Confirmar E-Mail"
                    value={userData.confirmEmail}
                    onChange={handleChange}
                />
            </div>
            </div>
            <div className="campoForm">
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Telefono"
                    value={userData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="campoForm">
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Direccion de entrega"
                    value={userData.address}
                    onChange={handleChange}
                />
            </div>
            <div className="grupo">
            <div className="campoForm">
                <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="Numero de Tarjeta"
                    value={userData.cardNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="campoForm">
                <input
                    type="number"
                    id="cardExpiryMonth"
                    name="cardExpiryMonth"
                    min="1"
                    max="12"
                    placeholder="MM"
                    value={userData.cardExpiryMonth}
                    onChange={handleChange}
                />
            </div>
            <div className="campoForm">
                <input
                    type="number"
                    id="cardExpiryYear"
                    name="cardExpiryYear"
                    min={new Date().getFullYear()}
                    max={new Date().getFullYear() + 10}
                    placeholder="AAAA"
                    value={userData.cardExpiryYear}
                    onChange={handleChange}
                />
            </div>
            <div className="campoForm">
                <input
                    type="text"
                    id="cardCVV"
                    name="cardCVV"
                    placeholder="CVV"
                    value={userData.cardCVV}
                    onChange={handleChange}
                />
            </div>
            </div>
            <Button label="Confirmar" type="submit" />
        </form>
    );
};

export default Orders;