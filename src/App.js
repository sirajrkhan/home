import './App.css';
import {Button} from 'reactstrap';
import Topnav from './components/Navbar/Navbar';
import CardExample from './components/Card/Card';

function App() {
  return (
    <>
      <Topnav />
      <div className="jumbotron">
        <p>Think of a content here!!!</p>
        <p>Think of a content here, as well!!!</p>
        <p>Think of a content here, and here tooo!!!</p>
        <Button color="danger">Danger!</Button>
      </div>
      <div class="container">
        <div class="row">
          <CardExample />
          <CardExample />
          <CardExample />
        </div>
      </div>
    </>

  );
}
export default App;
