import OptionGender from './OptionGender'
import OptionType from './OptionType'

const data = require ('../data.json')
const selectType =  Array.from( new Set(data.map(e => e.type)))
const selectGender = Array.from( new Set(data.map(e => e.gender)))

function Select({filterParams, resetHandler}) {
    
    function selectTypeHandler(e) {
        filterParams(e.target.value, e.target.name)        
    }
  
    return(
        <form id="select" className="border p-3">
            <select className="form-select form-select-lg mb-3" name="type" onChange={(e) => selectTypeHandler(e)}>
                <option defaultValue>Selecting an animal type</option>
                {selectType.map((element, index) => (
                        <OptionType key={index} type={element} />
                    ))
                }
            </select>

            <select className="form-select form-select-lg mb-3" name="gender" onChange={(e) => selectTypeHandler(e)}>
                <option defaultValue>Gender selection</option>
                {selectGender.map((element, index) => (
                        <OptionGender key={index} gender={element}/>
                    ))
                }       
            </select>
            <button type="reset" className="btn btn-secondary" form="select" onClick={resetHandler}>Reset</button>
        </form>
    )
}

export default Select