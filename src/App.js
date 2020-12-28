import './App.css';
import {Button} from 'reactstrap';
import Topnav from './components/Navbar/Navbar';
import CardExample from './components/Card/Card';

function App() {
  return (
    <div className="container">
      <Topnav />
      <div className="jumbotron">
        <p>Think of a content here!!!</p>
        <p>Think of a content here, as well!!!</p>
        <p>Think of a content here, and here tooo!!!</p>
        <Button color="danger">Danger!</Button>
      </div>
      <div class="container">
        <div class="row">
          <CardExample title="Bird One" subTitle="Such a beautiful bird" />
          <CardExample title="Bird Two" subTitle="Such a Pretty bird" />
          <CardExample title="Bird Three" subTitle="Isn't it the same bird?" />
        </div>
      </div>
    </div>
  );
}
export default App;
