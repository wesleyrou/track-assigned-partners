import React from 'react';
import Inputs from './Inputs'
import Results from './Results'
import ExportDataAsString from './ExportDataAsString'
import Analysis from './Analysis'

class App extends React.Component{
  state={
    currentDate:623,
    page:'input',
    data:[{date:526,pairs:[["James","Kathryn"],["Emily","George"],["Christopher","Jesus"],["Kenneth","MichaelF"],["Miki","Oluwaseyi"],["Renata","Rozaline"],["Nick","Ronnie"],["Karsten","Rebecca"],["Michelle","Muhajir"],["Abdu","Matthew"],["Joshua","Wesley"],["Chatchawan","Matt"],["Lucas","MichaelO"],["Jose","Minh"],["Camden","Chrissy"],["Gage","Marcel"],["Jeffrey","Savanna"],["Mar"]]},{date:527,pairs:[["Emily","James"],["Jesus","Kathryn"],["George","MichaelF"],["Christopher","Miki"],["Kenneth","Renata"],["Chrissy","Rozaline"],["Marcel","Ronnie"],["Muhajir","Nick"],["Karsten","Michelle"],["Abdu","Joshua"],["Chatchawan","Matthew"],["Lucas","Wesley"],["Jose","Matt"],["Camden","MichaelO"],["Gage","Minh"],["Rebecca","Oluwaseyi"],["Mar"]]},{date:528,pairs:[["Jesus","Emily"],["James","MichaelO"],["Kathryn","Michelle"],["George","Renata"],["Kenneth","Christopher"],["Ronnie","Oluwaseyi"],["Rebecca","Rozaline"],["Karsten","Marcel"],["Miki","Minh"],["Abdu","Nick"],["Chatchawan","Joshua"],["Jose","Matthew"],["Muhajir","Wesley"],["Gage","Matt"],["Camden","MichaelF"]]},{date:529,pairs:[["Jesus","MichaelF"],["Emily","Miki"],["James","Renata"],["Chrissy","George"],["Christopher","Ronnie"],["Kenneth","Rebecca"],["Michelle","Rozaline"],["Abdu","Marcel"],["Chatchawan","Nick"],["Jose","Joshua"],["Karsten","Muhajir"],["Gage","Matthew"],["Camden","Wesley"],["Matt","Minh"],["Kathryn","Oluwaseyi"]]},{date:601,pairs:[["MichaelO","Michelle"],["Jesus","Renata"],["Chrissy","James"],["George","Rebecca"],["Christopher","Kathryn"],["Kenneth","Miki"],["Abdu","Oluwaseyi"],["Chatchawan","Marcel"],["Jose","Nick"],["Karsten","Matt"],["Gage","Joshua"],["Camden","Muhajir"],["Matthew","Minh"],["MichaelF","Wesley"],["Emily","Rozaline"]]},{date:602,pairs:[["Michelle","Renata"],["Chrissy","Jesus"],["James","Rebecca"],["Kenneth","Kathryn"],["George","Miki"],["Abdu","Christopher"],["Chatchawan","Oluwaseyi"],["Jose","Marcel"],["Rozaline","Wesley"],["Gage","Nick"],["Camden","Karsten"],["Joshua","Minh"],["MichaelO","Muhajir"],["Matt","Matthew"],["Emily","MichaelF"]]},{date:603,pairs:[["Chrissy","Miki"],["Jesus","Ronnie"],["Emily","MichaelO"],["Michelle","Renata"],["Abdu","Kathryn"],["Chatchawan","Christopher"],["Kenneth","Rozaline"],["Jose","Oluwaseyi"],["Gage","Marcel"],["Camden","Matthew"],["Minh","Nick"],["Karsten","MichaelF"],["Joshua","Matt"],["George","Rebecca"],["James","Wesley"],["Muhajir"]]},{date:605,pairs:[["Chrissy","Renata"],["Michelle","Miki"],["Abdu","MichaelO"],["Chatchawan","Emily"],["Jose","Kathryn"],["George","James"],["Christopher","Gage"],["Kenneth","Camden"],["Minh","Oluwaseyi"],["MichaelF","Rozaline"],["Marcel","Matt"],["Joshua","Wesley"],["Matthew","Nick"],["Karsten","Rebecca"],["Jesus","Ronnie"],["Muhajir"]]},{date:609,pairs:[["Michelle","Rebecca"],["Abdu","Minh"],["Chatchawan","Renata"],["Jose","MichaelF"],["Emily","Gage"],["Camden","James"],["George","MichaelO"],["Christopher","Matt"],["Kenneth","Wesley"],["Matthew","Oluwaseyi"],["Muhajir","Nick"],["Joshua","Marcel"],["Karsten","Ronnie"],["Jesus","Miki"],["Kathryn"],["Chrissy"]]},{date:610,pairs:[["Abdu","Rebecca"],["Chatchawan","Chrissy"],["Jose","Renata"],["Gage","MichaelO"],["Camden","Jesus"],["Emily","Minh"],["James","MichaelF"],["Kathryn","Matt"],["George","Wesley"],["Christopher","Ronnie"],["Kenneth","Muhajir"],["Joshua","Oluwaseyi"],["Karsten","Matthew"],["Marcel","Nick"],["Michelle","Miki"]]},{date:615,pairs:[["Matt","Oluwaseyi"],["MichaelO","Wesley"],["Matthew","Minh"],["Camden","Muhajir"],["Gage","Joshua"],["Jose","Karsten"],["Chatchawan","Nick"],["Abdu","Marcel"],["Kenneth","Michelle"],["Christopher","Rebecca"],["George","Ronnie"],["Chrissy","Kathryn"],["James","Renata"],["Emily","Miki"],["Jesus","MichaelF"]]},{date:616,pairs:[["Oluwaseyi","Wesley"],["Matt","Matthew"],["MichaelO","Muhajir"],["Joshua","Minh"],["Camden","Karsten"],["Gage","Nick"],["Jose","Marcel"],["Chatchawan","Kenneth"],["Abdu","Christopher"],["George","Michelle"],["Kathryn","Rebecca"],["James","Ronnie"],["Chrissy","Emily"],["Jesus","Renata"],["MichaelF","Miki"]]},{date:617,pairs:[["Matthew","Oluwaseyi"],["Muhajir","Wesley"],["Joshua","Matt"],["Karsten","MichaelO"],["Minh","Nick"],["Camden","Marcel"],["Gage","Kenneth"],["Christopher","Jose"],["Chatchawan","George"],["Abdu","Kathryn"],["James","Michelle"],["Emily","Rebecca"],["Jesus","Ronnie"],["Chrissy","MichaelF"],["Miki","Renata"]]},{date:618,pairs:[["Muhajir","Oluwaseyi"],["Joshua","Matthew"],["Karsten","Wesley"],["Matt","Nick"],["Marcel","MichaelO"],["Kenneth","Minh"],["Camden","Christopher"],["Gage","George"],["Jose","Kathryn"],["Chatchawan","James"],["Abdu","Emily"],["Jesus","Michelle"],["MichaelF","Rebecca"],["Miki","Ronnie"],["Chrissy","Renata"]]},{date:623,pairs:[["Nick","Oluwaseyi"],["Karsten","Kenneth"],["Christopher","Joshua"],["George","Muhajir"],["Kathryn","Matthew"],["James","Wesley"],["Emily","Matt"],["MichaelO","Miki"],["Minh","Renata"],["Camden","Chrissy"],["Gage","Ronnie"],["Jose","Rebecca"],["Chatchawan","Michelle"],["Abdu"]]},{date:624,pairs:[["Kathryn","Oluwaseyi"],["George","James"],["Christopher","Emily"],["Kenneth","Miki"],["Nick","Renata"],["Chrissy","Karsten"],["Joshua","Ronnie"],["Muhajir","Rebecca"],["Abdu","Matthew"],["Chatchawan","Wesley"],["Jose","Matt"],["Gage","MichaelO"],["Camden","Minh"]]},{date:625,pairs:[["George","Kathryn"],["Christopher","James"],["Kenneth","Miki"],["Oluwaseyi","Renata"],["Chrissy","Nick"],["Karsten","Ronnie"],["Joshua","Rebecca"],["Abdu","Muhajir"],["Chatchawan","Matthew"],["Jose","Wesley"],["Gage","Matt"],["Camden","MichaelO"],["Minh"]]},{date:706,pairs:[["Oluwaseyi","Ronnie"],["Chrissy","Rebecca"],["Abdu","Renata"],["Chatchawan","Miki"],["Gage","James"],["Camden","Kathryn"],["George","Minh"],["Christopher","MichaelO"],["Kenneth","Matt"],["Nick","Wesley"],["Karsten","Matthew"],["Joshua","Muhajir"]]}]
    
  }

  //handle submit pair
  handleSubmitPair = (e) => {
    e.preventDefault();
    const arrOfPairs=e.target.pair.value.split(' ');
    console.log(arrOfPairs)
    let targetDateData
    let newData
    if(this.state.data.find(pairsForDate => pairsForDate.date===this.state.currentDate)){

      //find target date and filter out
      targetDateData=this.state.data.find(pairsForDate => pairsForDate.date === this.state.currentDate)
      newData=this.state.data.filter(pairsForDate => pairsForDate.date !== this.state.currentDate)
    }else{
      targetDateData={date:this.state.currentDate,pairs:[]}
      newData=this.state.data
    }
    console.log(targetDateData,newData)
    arrOfPairs.forEach((pair)=>{
      const inputPair=pair.split('/').sort();
      console.log(inputPair)

      //update target date with new value    
      if(targetDateData.pairs.find(pair => pair.join() === inputPair.join())){
        console.log('duplicate entry')
      } else {        
        targetDateData.pairs.push(inputPair)
      }
    })
    newData.push(targetDateData)
    newData.sort((a,b)=> a.date-b.date)
    this.setState({
      data:newData
    })
    e.target.reset();
  }

  //handle change date
  handleChangeDate = (e) => {
    e.preventDefault();
    this.setState({
      currentDate:Number(e.target.date.value)
    })
  }

  handleWhatPage = (e) => {
    this.setState({
      page:e.target.id
    })    
  }

  render(){
    return(
      <div className='App'>
        <button type='button' onClick={(e)=>this.handleWhatPage(e)} id='analysis'>Analysis</button>
        <button type='button' onClick={(e)=>this.handleWhatPage(e)} id='input'>Input</button>
        {this.state.page==='input' && <Inputs handleSubmitPair={this.handleSubmitPair} handleChangeDate={this.handleChangeDate}/>}
        {this.state.page==='analysis' && <Analysis data={this.state.data}/>}
        <Results data={this.state.data}/>
        <ExportDataAsString data={this.state.data}/>
      </div>
    )
  }
}

export default App;
