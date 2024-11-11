import React from 'react';

export default function ListComponent() {
    // Przykładowa tablica elementów
    const item = 'some item'
    const items = [
        { id: 1, name: 'Element 1' },
        { id: 2, name: 'Element 2' },
        { id: 3, name: 'Element 3' },
        { id: 4, name: 'Element 4' },
    ];
    return (
        <div>
            <hr></hr>
            <h1>{item}</h1>
            <h2>Lista elementów:</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <hr></hr>
        </div>
    );
};