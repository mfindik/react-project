import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navigasyon from './layouts/Navigasyon'
import AnaBilesen from './layouts/AnaBilesen';
import { Container } from 'semantic-ui-react';
function App() {
  return (
    <div className="App">
      <Navigasyon/>
      <Container className="main">
        <h3>Burası AnaBilesen</h3>
        <AnaBilesen />
      </Container>



    </div>
  );
}

export default App;
