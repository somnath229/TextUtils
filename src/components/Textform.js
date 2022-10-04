import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () =>{
        // console.log("yupp! uppercase clicked" + text);
        let newText1 = text.toUpperCase();
        setText(newText1);
        props.showAlert("Converted to UPPERCASE." , "success");
    }
    const handleDownClick = () =>{
        // console.log("yupp! uppercase clicked" + text);
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to lowercase." , "success");

    }
    const handleClearClick = () =>{
        let newText2 = "";
        setText(newText2);
        props.showAlert("Textarea cleared." , "success");
    }

    const handleCopyClick = () =>{
        let textcopy = document.getElementById("myBox");
        textcopy.select();
        navigator.clipboard.writeText(textcopy.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard." , "success");
    }
 
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space handled." , "success");
    }

    const handleOnChange = (event) =>{
        // console.log("yupp! uppercase clicked")
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    // setText("somnath dubey is typing")  -> correct way to change state variable
    // setText = "somnath dubey is typing"  -> wrong way to change state variable
    return (
        <>
        <div className = " container ">
            <h1 className = 'mb-4'>{props.heading}</h1>
            <div className="mb-4">
                {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="13"></textarea>
            </div>
            <div className="container my-3">
            <button type="submit" className= {`btn btn-primary mb-3`} onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button type="submit" className="btn btn-primary mb-3 ms-1" onClick={handleDownClick} >Convert to lowercase</button>
            <button type="submit" className="btn btn-primary mb-3 ms-1" onClick={handleExtraSpace} >Handle Extra Space</button>
            <button type="submit" className="btn btn-primary mb-3 ms-1" onClick={handleCopyClick} >Copy</button>
            <button type="submit" className="btn btn-primary mb-3 ms-1" onClick={handleClearClick} >Clear</button>
            </div>           
        </div>

        <div className="container">
            <h1>Your text summary</h1>
            <p className = "ms-3">{text.length} Letters</p>
            <p className = "ms-3">{text.split(" ").filter((element)=>{return element.length!==0}).length} Words</p>
            <p className = "ms-3">{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p>
            <h2>Preview</h2>
            <p className = "ms-2">{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
        </>
    )
} 
