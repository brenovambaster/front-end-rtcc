import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const AddTeacher = ({ closeModal }: { closeModal: () => void }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [locationOfWork, setLocationOfWork] = useState('');
    const [researchArea, setResearchArea] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (!name || !email || !locationOfWork || !researchArea || !title) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        try {
            await axios.post('http://localhost:8080/professor', {
                name,
                email,
                locationOfWork,
                researchArea,
                title,
            });
            setMessage('Professor adicionado com sucesso!');
            setName('');
            setEmail('');
            setLocationOfWork('');
            setResearchArea('');
            setTitle('');
            setError('');
            setTimeout(() => {
                setMessage('');
                closeModal();
                window.location.reload();
            }, 1090);
        } catch (error) {
            setMessage('Erro ao adicionar professor. Por favor, tente novamente.');
            setError('');
        }
    };

    return (
        <div>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nome do Professor"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        isInvalid={!name}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira o nome.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email do Professor"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!email}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira o email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formLocationOfWork">
                    <Form.Label>Campus</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Local de Trabalho"
                        value={locationOfWork}
                        onChange={(e) => setLocationOfWork(e.target.value)}
                        isInvalid={!locationOfWork}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira o local de trabalho.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formResearchArea">
                    <Form.Label>Área de Pesquisa</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Área de Pesquisa"
                        value={researchArea}
                        onChange={(e) => setResearchArea(e.target.value)}
                        isInvalid={!researchArea}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira a área de pesquisa.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formTitle">
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Título Acadêmico"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        isInvalid={!title}
                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor, insira o título.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Adicionar Professor
                </Button>
            </Form>
        </div>
    );
};

export default AddTeacher;
