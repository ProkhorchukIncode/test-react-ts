import { Route, Routes, Navigate} from 'react-router-dom';

import HomeView from './views/HomeView';
import UserView from './views/UserView';

import Container from '@material-ui/core/Container';

import './styles/main.css'

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/users' element ={<HomeView/>}/>
        <Route path='/users/:id' element ={<UserView/>}/>
        <Route path='*' element ={<Navigate replace to='/users'/>}/>
      </Routes>
    </Container>
  );
}

export default App;