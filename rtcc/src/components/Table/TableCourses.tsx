import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function DataTable() {
    const [data, setData] = useState<{ id: string; name: string; campus: string; codeOfCourse: string }[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/course')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
                setError('Erro ao buscar dados. Por favor, tente novamente mais tarde.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error.length > 0) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Campus</th>
                        <th>Código do Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.campus}</td>
                            <td>{item.codeOfCourse}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default DataTable;