import logo from './logo.svg';
import './App.css';
import Test from './components/test';

const App = () => {
  const fName = "jithin"
  const age = 20;
  const isValid = false;
  const employee = { name: 'jitiin', age: 20 }
  const employees = [{ name: 'jitiin', age: 20 }, { name: 'raju', age: 30 }]

  const { name } = employee;
  const [firstEmployee,secoond] = employees

  let a=[1,2,3,4]
  let b=[...a];
  console.log("a=>",a)
  b.push(5)
  console.log("a=>",a)
  console.log("b=>",b)


  return (
    <div className="App">
      {/* name={fName}
      {JSON.stringify(employee)}
      {JSON.stringify(employees)} */}

      {/* To convert object to string  */}
      {JSON.stringify(firstEmployee.name)}
      {JSON.stringify(secoond.name)}

      {name}
      {/* <Test name={fName} age={age} /> */}
    </div>
  );
}

export default App;
