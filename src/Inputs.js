import React from 'react'

const Input = function (props) {
    return (
        <div className='input'>
            <form onSubmit={(e)=>props.handleSubmitPair(e)}>
                <legend hidden></legend>
                <fieldset>
                    <label htmlFor='pair'>Pair: </label>
                    <input name='pair' id='pair' placeholder='Wesley James'></input>
                    <button type='submit'>Submit</button>
                </fieldset>            
            </form>
            <form onSubmit={(e)=>props.handleChangeDate(e)}>
                <legend hidden></legend>
                <fieldset>
                    <label htmlFor='date'>Pair: </label>
                    <input name='date' id='date' placeholder='622'></input>
                    <button type='submit'>Submit</button>
                </fieldset>            
            </form>
            
        </div>
    )
}

export default Input