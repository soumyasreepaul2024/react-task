
import React,{useState} from 'react';
import './Navbar.css';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Form from '../pages/Form';
const Navbar = (props) => {

  const [currentPage, setCurrentPage] = useState('');
  const handlePageChange = (Page) => {
  setCurrentPage(Page)
  };

  const renderPage = () => (
    currentPage === 'about' ? <About /> :
    currentPage === 'contact' ? <Contact /> :
    currentPage === 'write-for-us' ? <Form /> :
   
    null
  );
  return (
    
    <div className='main'>
      <nav>
        <ul>
           <li><a href="#about" onClick={() => handlePageChange('about')}>{props.title}</a></li>
          <li><a href="#contact" onClick={() => handlePageChange('contact')}>{props.name}</a></li>
          <li><a href="#write-for-us" onClick={() => handlePageChange('write-for-us')}>{props.form}</a></li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
};
export default Navbar