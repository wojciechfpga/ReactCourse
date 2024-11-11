import { useState, useEffect } from 'react';

export default function ListComponent() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            setUsers(result);
        };

        fetchUsers();
    }, []); // Pobrano raz przy montowaniu

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Wyszukaj użytkownika"
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
