import React from 'react'

const ExportDataAsString = (props) => {
    let string=[]
    props.data.forEach(obj=>{
        let pairsString=[]
        obj.pairs.forEach(pair => {
            pair.length===2 ? pairsString.push(`["${pair[0]}","${pair[1]}"]`) : pairsString.push(`["${pair[0]}"]`)            
        })
        string.push(`{date:${obj.date},pairs:[${pairsString.join()}]}`)
    })
    

    return (
    <div>data:[{string.join()}]</div>
    )
}

export default ExportDataAsString