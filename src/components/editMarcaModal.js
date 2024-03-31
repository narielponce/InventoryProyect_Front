import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditarMarcaModal = ({ show, handleClose }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleNombreChange = (event) => setNombre(event.target.value);
    const handleDescripcionChange = (event) => setDescripcion(event.target.value);

    const handleGuardar = () => {
        // Aquí puedes realizar la lógica para guardar los datos
        console.log('Nombre:', nombre);
        console.log('Descripción:', descripcion);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Marca</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={nombre} onChange={handleNombreChange} />
                    </Form.Group>
                    <Form.Group controlId="formDescripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={descripcion} onChange={handleDescripcionChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleGuardar}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditarMarcaModal;
