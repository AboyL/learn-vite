import { useState } from 'react';
import './App.scss';
import styles from './test.module.scss';
import styled from '@emotion/styled';

const EmButton = styled.button`
  color: red;
  text-align: center;
`;

function App() {
  const a = '1';

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="test">
        <div className="test1">test1 {count}</div>
        <div className="test2 text-center">test2 {count}</div>
        <div className={styles.testxxx}>module</div>
        <EmButton>tttttt</EmButton>
      </div>
    </div>
  );
}

export default App;
