import React from 'react'

class Analysis extends React.Component {
    state={
        selectedStudent:'Abdu'
    }

    handleSelectStudent = (e) =>{
        this.setState({
            selectedStudent:e.target.value
        })
    }


    render(){
        const students = []
        this.props.data.forEach(date =>{
            date.pairs.forEach(pair => {
                !students.find(student => student === pair[0]) ? students.push(pair[0]) : console.log()
                pair.length===2 && !students.find(student => student === pair[1])? students.push(pair[1]) : console.log()
            })
        })
        students.sort()
        const options=students.map((student,i)=>{
            return (
                <option key={i} value={student}>{student}</option>
            )
        })

        let selectedStudentsPairsWithDate=[]
        let selectedStudentsPairs=[]
        this.props.data.forEach(date => {
            date.pairs.forEach(pair => {
                pair[0]===this.state.selectedStudent && pair.length===2 ? selectedStudentsPairsWithDate.push(`${date.date}: ${pair[1]}`) && selectedStudentsPairs.push(pair[1]): console.log()
                pair[1]===this.state.selectedStudent ? selectedStudentsPairsWithDate.push(`${date.date}: ${pair[0]}`) && selectedStudentsPairs.push(pair[0]): console.log()
            })            
        })
        let graph = []
        students.forEach((student,i) => {
            graph.push(
                <div key={i} className='graph-column-container'>
                    <div className='graph-student-name'>{student}</div>
                    {selectedStudentsPairs.filter(pair => pair===student).map((boxes,j) => {
                        return <div key={j} className='graph-unit'></div>
                    })}
                </div>
            )
        })

        return (
            <div>
                <select onChange={(e) => this.handleSelectStudent(e)}>
                    {options}                
                </select>
                <div className='analysis-results-container'>                    
                    <ul>
                        {selectedStudentsPairsWithDate.map((string,i) => {
                            return <li key={i}>{string}</li>
                        })}
                    </ul>
                    <div className='graph-container'>
                        {/* Graph */}
                        {graph}
                    </div>
                </div>
                
            </div>
        )
    }    
}

export default Analysis