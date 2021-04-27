import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="body">
     <Header></Header>
     <Cart></Cart>
     <Courses></Courses>
    </div>
  );
}

export default App;
