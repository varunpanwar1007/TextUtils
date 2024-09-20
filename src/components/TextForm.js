import React,{useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text,setText]=useState('');
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleOnClick=()=>{
    setText(text.toUpperCase());
    props.showAlert('success',' : Converted to Uppercase!');
  }
  const handleClearText=()=>{
    setText('');
    props.showAlert('success',' : Text Cleared!');
  }
  const convertToLowercase=()=>{
    setText(text.toLowerCase());
    props.showAlert('success',' : Converted to Lppercase!');
  }
  return (
    <div>
      <div class="form-group" style={{color:props.mode==='dark'?'white':'black'}}>
        <textarea className="form-control my-1" value={text} id="myBox" placeholder="Enter text here" rows="8" onChange={handleOnChange}></textarea>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={convertToLowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
       </div>
       <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
       </div>
    </div>
  )
}