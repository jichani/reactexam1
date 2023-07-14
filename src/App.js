// import './App.css';

import Myheader from './MyHeader';

function App() {
  let name = "지찬";

  const number = 5;

  return (
    <div className="App">
      <Myheader />
      <h2>안녕 리액트 {name}</h2>
      <b id='bold_text'>
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
    </div>
  );
}

export default App;
