import React from 'react';
import Inputs from './Inputs'
import Results from './Results'

class App extends React.Component{
  state={
    pairData:[
      {
        date:622,
        pairs:[]
      }
    ],
    currentIndex:0,
    currentDate:622
  }

  findIndexByDate(date){
    for(let i=0;i<this.state.pairData.length;i++){
      if(this.state.pairData[i].date===date){
        return i;
      }
    }
    const newPairData = [...this.state.pairData,
    {
      date:date,
      pairs:[]
    }]
    console.log(newPairData);

    this.setState({pairData:newPairData},()=>{
      console.log(this.state.pairData.length-1)    
    })
    return this.state.pairData.length-1;    
  }

  //handle submit pair
  handleSubmitPair(e){
    e.preventDefault();
    const newElement=e.target.pair.value.split(' ');
    const indexDate=this.findIndexByDate(this.state.currentDate);
    console.log(indexDate,'here');

    let newPairData= this.state.pairData
    newPairData[indexDate].pairs.push(newElement);

    this.setState({pairData:newPairData})

  }

  //handle change date
  handleChangeDate(e){
    e.preventDefault();
    console.log(e.target.date.value,'before');
    this.setState({currentDate:e.target.date.value},()=>console.log(this.state.currentDate,'after'))        
  }

  render(){
    return(
      <div className='App'>
        <Inputs handleSubmitPair={(e)=>this.handleSubmitPair(e)} handleChangeDate={(e)=>this.handleChangeDate(e)}/>
        <Results />
      </div>
    )
  }
}

export default App;
