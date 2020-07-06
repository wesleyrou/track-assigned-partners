import React from 'react'


const ResultForDate = function (props) {
    const pairs = props.data.pairs.map((pair, i) =>{
        return <div key={i}>{pair}</div>
    })
    
    return (
        <div className='result-for-date-container'>
            <div>
                {props.data.date}
            </div>
            <div>
                {pairs}
            </div>
        </div>
    )
}

export default ResultForDate