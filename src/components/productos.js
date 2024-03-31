// Productos.js
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import {FaEdit, FaTrash} from 'react-icons/fa';
import ModalForm from './ModalForm';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/products')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h3>Listado de Productos</h3>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Código interno</th>
                        <th>N° de serie</th>
                        <th>Marca</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Stock inicial</th>
                        <th>Ubicación</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <tr key={producto.idProduct}>
                            <td>{producto.idProduct}</td>
                            <td>{producto.code}</td>
                            <td>{producto.serial}</td>
                            <td>{producto.branch.name}</td>
                            <td>{producto.categorie.name}</td>
                            <td>{producto.description}</td>
                            <td>{producto.initialStock}</td>
                            <td>{producto.location.name}</td>
                            <td><a href={`editar/${producto.idProduct}`}><FaEdit /></a></td>
                            <td><a href={`eliminar/${producto.idProduct}`}><FaTrash /></a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" className="mb-3" onClick={handleShowModal}>Ingreso material</Button>
            <Button variant="secondary" className="mb-3" onClick={handleShowModal}>Egreso material</Button>
            <ModalForm show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}

export default Productos;