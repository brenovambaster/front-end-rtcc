import DataTable from '../components/Table/TableProfessor'
import AddTeacher from '../components/Table/AddProfessor'
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import React, { useState } from 'react';


function Professor() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <Container>
            <h1>Gestão de Professores</h1>
            <Row className="mb-3">
                <Col>
                    <Button variant="primary" onClick={handleShow}>
                        Adicionar Professor
                    </Button>
                </Col>
            </Row>
            <DataTable />
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Novo Professor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddTeacher closeModal={handleClose} />
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Professor