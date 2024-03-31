import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import Marcas from './marcas';

const ModalForm = ({ show, handleClose }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    const formData = {
      name: nombre,
      description: descripcion
    };

    fetch('http://localhost:8080/api/v1/branch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
      return response.json();
    })
    .then(data => {
      console.log('Datos enviados exitosamente:', data);
      setSuccess(true);
    })
    .catch(error => {
      console.error('Error:', error);
      setError('Error al enviar los datos');
    });
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        handleClose();
      }, 5000); // Cierra la ventana modal después de 5 segundos
      return () => clearTimeout(timer);
      <Marcas/>
    }
  }, [success, handleClose]);

  const handleDismiss = () => {
    setSuccess(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nueva marca</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">Operación realizada correctamente</Alert>}
        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit}>Enviar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
