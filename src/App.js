
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notFound';
import Header from './components/header';

const App = () => {
  const fName = "jithin"
  const age = 20;
  const isEnabled = true;
  const employee = { name: 'jitiin', age: 20 }
  const employees = [{ name: 'jitiin', age: 20, gender: 'M' }, { name: 'Amrutha', age: 30, gender: 'F' }]

  const { name } = employee;
  const [firstEmployee, secoond] = employees

  let a = [1, 2, 3, 4]
  let b = [...a];
  console.log("a=>", a)
  b.push(5)
  console.log("a=>", a)
  console.log("b=>", b)


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Layout />} >
           
          </Route> */}
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
