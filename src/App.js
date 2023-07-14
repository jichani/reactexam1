// import './App.css';

import Container from './Container';
import Counter from './Counter';
import Myheader from './MyHeader';

function App() {

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  }

  return (
    <Container>
      <div>
        <Myheader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
