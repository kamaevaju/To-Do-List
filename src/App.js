import './App.css';
import image from './bulb.avif';
import { BusinessList } from './ToDoList';


function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img className='image' src={image} width="180px" alt='pic1' />
      </div>
      <div className='container'>
      <h1>To Do List</h1>
      </div>
      <div className='container'>
      <BusinessList />
      </div>
      <div className='container'>
      <p>Have a good day!</p>
      </div>
      
    </div>
  );
}


export default App;
