import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function DataTable() {
    const [data, setData] = useState<{ id: String; name: string; email: string; locationOfWork: string, researchArea: string, title: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        fetch('http://localhost:8080/professor')
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
