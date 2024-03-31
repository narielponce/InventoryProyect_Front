// Ubicaciones.js
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import {FaEdit, FaTrash} from 'react-icons/fa';
import ModalForm from './ModalForm';

const Ubicaciones = () => {
    const [ubicaciones, setUbicaciones] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/locations')
            .then(response => response.json())
            .then(data => setUbicaciones(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h3>ABM de Ubicaciones</h3>
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
                    {ubicaciones.map(ubicacion => (
                        <tr key={ubicacion.idLocation}>
                            <td>{ubicacion.idLocation}</td>
                            <td>{ubicacion.name}</td>
                            <td>{ubicacion.description}</td>
                            <td><a href={`editar/${ubicacion.idLocation}`}><FaEdit /></a></td>
                            <td><a href={`eliminar/${ubicacion.idLocation}`}><FaTrash /></a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" className="mb-3" onClick={handleShowModal}>Nueva Ubicación</Button>
            <ModalForm show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}

export default Ubicaciones;
