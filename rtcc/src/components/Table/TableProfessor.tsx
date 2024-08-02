import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function DataTable() {
    const [data, setData] = useState<{ id: String; name: string; email: string; locationOfWork: string, researchArea: string, title: string }[]>([]);

    useEffect(() => {
        // Substitua pela URL da sua API
        fetch('http://localhost:8080/professor')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Campus</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.locationOfWork}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default DataTable;
