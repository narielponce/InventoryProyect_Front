// Marcas.js
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import {FaEdit, FaTrash} from 'react-icons/fa';
import ModalForm from './ModalForm';

const Marcas = () => {
    const [marcas, setMarcas] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/brands')
            .then(response => response.json())
            .then(data => setMarcas(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h3>ABM de Marcas</h3>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {marcas.map(marca => (
                        <tr key={marca.idBrand}>
                            <td>{marca.idBrand}</td>
                            <td>{marca.name}</td>
                            <td>{marca.description}</td>
                            <td><a href={`editar/${marca.idBrand}`}><FaEdit /></a></td>
                            <td><a href={`eliminar/${marca.idBrand}`}><FaTrash /></a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" className="mb-3" onClick={handleShowModal}>Nueva Marca</Button>
            <ModalForm show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}

export default Marcas;