import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <div className="body">
     <Header></Header>
     <Courses></Courses>
    </div>
  );
}

export default App;
