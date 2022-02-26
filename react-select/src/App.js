import Card from "./components/Card";
import Select from "./components/Select";
import { useState } from 'react'
const data = require ('./data.json')

function App() {

  const [dataAnimal, setDataAnimal] = useState(data)
  const [typeAnimal, setTypeAnimal] = useState('')
  const [genderAnimal, setGenderAnimal] = useState('')

  function resetHandler() {
    setDataAnimal(data)
    setTypeAnimal('')
    setGenderAnimal('')
  }

  function filterParams(param, nameSelect) {
    if(nameSelect === 'type') {
      setTypeAnimal(param)

      if(genderAnimal) {
        setDataAnimal(data.filter(e =>{
          return e.gender === genderAnimal && e.type === param
        }))
      } else {
        setDataAnimal(data.filter(e => e.type === param))
      }

    } else if(nameSelect === 'gender') {
      setGenderAnimal(param)
      
      if(typeAnimal) {
        setDataAnimal(data.filter(e =>{
          return e.type === typeAnimal && e.gender === param
        }))
      } else {
        setDataAnimal(data.filter(e => e.gender === param))
      }
    }
  }

  return (
    <div className="container d-flex justify-content-center flex-wrap" style={{Minwidth: "80rem"}}>
      <h1 className="display-1">Test task from А-БТ</h1>
      <div className="border  flex-grow-1">
        <Select filterParams={filterParams} resetHandler={resetHandler}/>
        <div className="container d-flex flex-wrap">
          {dataAnimal.map((element, index) => (
            <Card key={element.name} {...element} index={index}/>
          ))}
        </div>
      </div>

      </div>
  );
}

export default App;
