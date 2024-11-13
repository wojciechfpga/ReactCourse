import React, { useState } from 'react';
import ChildComponent from './child';
export default function ParentComponent() {
    const [value, setValue] = useState(1);
    console.log('Parent render');
    return (
      <div>
        <h1>ParentComponent</h1>
        <p>Value {value}</p>
        <button onClick={() => setValue(2)}>Change to 2 and send to child component</button>
        <ChildComponent someprop={value} />
      </div>
    );
  }