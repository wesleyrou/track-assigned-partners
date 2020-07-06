import React from 'react'
import ResultForDate from './ResultForDate'

const Results = function (props) {
    const results = props.data.map((singleDayData,i) => <ResultForDate data={singleDayData} key={i}/>)


    return (
        <div>
            <div className='results-container'>
                {results}
            </div>
        </div>
    )
}

export default Results