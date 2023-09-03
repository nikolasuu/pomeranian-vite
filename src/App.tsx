import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { analyzeString, printAnalyzeResult } from './ts-exercises-functions';

function App() {
  const [count, setCount] = useState(0);
  const result = analyzeString('Nikolas');

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <ReactLink url="https://react.dev" x={1} />
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>{printAnalyzeResult(result)}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

let x: number | string;

x = 1;
x = 2;
x = 'string';

console.log(x);

function add(a: number, b: number): number {
  return a + b;
}

add(5, 6);

const add2 = (a: number, b: number): number => a + b;

add2(4, 7);

export type reactLinkProps = { url: string; x?: number };

function ReactLink(props: reactLinkProps) {
  return (
    <a href={props.url} target="_blank">
      {props.x}
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  );
}

export default App;
