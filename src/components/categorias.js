// Categorias.js
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import {FaEdit, FaTrash} from 'react-icons/fa';
import ModalForm from './ModalForm';

const Categorias = () => {
    const [categorias, setCategorias] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/categories')
            .then(response => response.json())
            .then(data => setCategorias(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h3>ABM de Categorías</h3>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map(categoria => (
                        <tr key={categoria.idCategory}>
                            <td>{categoria.idCategory}</td>
                            <td>{categoria.name}</td>
                            <td><a href={`editar/${categoria.idCategory}`}><FaEdit /></a></td>
                            <td><a href={`eliminar/${categoria.idCategory}`}><FaTrash /></a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" className="mb-3" onClick={handleShowModal}>Nueva Categoría</Button>
            <ModalForm show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}

export default Categorias;
