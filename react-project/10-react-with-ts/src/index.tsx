import ReactDOM from 'react-dom/client';
import App from './App';

//타입 단언
//ts컴파일러가 null, undefined를 가능하다라고 해석하고 있고,
//여러분들은 #root가 존재한다고 단언할 수 있는 상황.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

