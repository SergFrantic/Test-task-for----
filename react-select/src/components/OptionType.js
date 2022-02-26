import { useEffect, useState } from "react"


function OptionType({type}) {

   
    return(
        <option value={type}>{type}</option>
    )
}
export default OptionType