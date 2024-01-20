import React, { useState } from 'react'

export const TextUtilForm = (props) => {

    const [text, setText] = useState("");
    const [vowel, setVowel] = useState(0);
    const [constant, setConstant] = useState(0);
    const [fword, findWord] = useState("");
    const [rword, repWord] = useState("");
    let countv = 0, countc = 0;

    const TextBoxEvent = (event) => {
        setText(event.target.value);
    }
    const TextUpper = () => {
        let txt = text.toUpperCase();
        setText(txt);
        props.showAlert("Text Converted Uppercase !", "success");
    }
    const TextLower = () => {
        let txt = text.toLowerCase();
        setText(txt);
        props.showAlert("Text Converted Lowercase !", "success");
    }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak Mode On !", "success");
    }
    const clear = () => {
        setText("");
        setVowel(0);
        setConstant(0);
        props.showAlert("Text clear ! ", "warning");
    }
    const CountVowel = () => {

        for (let i = 0; i <= text.length; i++) {
            if (text.charAt(i).match(/[aeiouAEIOU]/)) {
                countv++;

            }
        }
        setVowel(countv);
        props.showAlert("Vowel Count Fire !!", "success");
        console.log(vowel);
    }
    const CountConstant = () => {

        for (let i = 0; i <= text.length; i++) {
            if (text.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
                countc++;

            }
        }
        setConstant(countc);
        props.showAlert("Constant Count Fire !!", "success");
    }

    const findEvent = (event) => {
        findWord(event.target.value);

    }
    const replaceEvent = (event) => {
        repWord(event.target.value);
    }
    console.log(fword);
    console.log(rword);
    const Replaceword = () => {
        let newText = text.replaceAll(fword, rword);
        setText(newText);
        findWord("");
        repWord("");
    }
    const CopyText = () => {
        // var text = document.getElementById('TextBox');
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("copy to clipboard !", "success");
    }
    const removeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces ..", "success");
    }
    
    return (
        <>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <div>
                    <h3 className={`mx-3 mb-5 mt-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.title}</h3>
                    <div className="mb-2 my-2 textarea">
                        <textarea className="form-control my-3" placeholder="enter text to perform text utility........" style={{ backgroundColor: props.mode === 'dark' ? '#011737' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={TextBoxEvent} id="TextBox" rows="8"></textarea>


                    </div>
                    <div className="mb-2 my-2 textarea">
                        <textarea className="form-control  textbox" placeholder='enter find text here....'  style={{ backgroundColor: props.mode === 'dark' ? '#011737' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={fword} onChange={findEvent} id="TextBox" rows="2"></textarea>
                    </div>
                    <div className="mb-2 my-3 mb-4 textarea">
                        <textarea className="form-control textbox" placeholder='enter replace text here.....' style={{ backgroundColor: props.mode === 'dark' ? '#011737' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={rword} onChange={replaceEvent} id="TextBox" rows="2"></textarea>
                    </div>
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="container ">
                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={TextUpper}>UpperCase</button>
                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={TextLower}>LowerCase</button>
                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={speak}>Speak</button>
                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={clear}>Clear</button>

                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={CopyText}>Copy Text</button>
                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={CountVowel}>           Count Vowel</button>
                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={CountConstant}>Count Contant</button>
                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={Replaceword}>Replace Word</button>
                                <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'outline-primary'} `} onClick={removeSpace}>Remove Space</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className='my-3'>Your text summary</h2>
                    <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} Words and {text.length} character </p>
                   {/* <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} word</p> */}
                    <p>Total no of vowel : {vowel} </p>
                    <p>Total no of  Constant : {constant} </p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something text to preview here"}</p>
                </div>
            </div>
        </>
    )
}

export default TextUtilForm;
