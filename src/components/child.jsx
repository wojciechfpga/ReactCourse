
import { useEffect, useState } from "react";
export default function ChildComponent({ someprop }) {
  const [renderCount, setRenderCount] = useState(false);

  // Aktualizujemy stan renderCount za każdym razem, gdy komponent się renderuje
  // To spowoduje nieskończoną pętlę renderowania
  useEffect(()=>{
    setRenderCount(someprop+1); 
  })

  console.log('ChildComponent render', renderCount);

  return (
    <div>
      <p>Prop value: {someprop}</p>
      <p>Render not prop in ChildComponent: {renderCount}</p>
    </div>
  );
}