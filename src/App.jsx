import { Routes, Route } from 'react-router-dom';
import {
  Nav,
  Header,
  Service,
  Stack,
  Works,
  Testi,
  Footer,
} from './components';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Nav />
            <Header />
            <Service />
            <Stack />
            <Works />
            <Testi />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
