// 예시 - 나중에 react-router-dom 설치 후
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;