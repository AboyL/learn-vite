import { useState } from 'react';
import './App.scss';
import styles from './test.module.scss';
import styled from '@emotion/styled';
// import { test } from './test.json';
import data, { test } from './test.json';
import jsonUrl from './test.json?url';


const EmButton = styled.button`
  color: red;
  text-align: center;
`;

function App() {

  const [count] = useState(0);

  return (
    <div className="App">
      <div className="test">
        <div className="test1">test1 {count}</div>
        <div>{test}</div>
        <div>{data.test}</div>
        <div>{jsonUrl}</div>
        <div className="test2 text-center">test2 {count}</div>
        <div className={styles.testxxx}>module</div>
        <div>{import.meta.env.VITE_IMG_BASE_URL}</div>
        <EmButton>tttttt</EmButton>
      </div>
    </div>
  );
}

export default App;
