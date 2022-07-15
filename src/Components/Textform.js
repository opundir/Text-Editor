import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("object");
    if (text === "") alert("No text available");
    else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert(" Succesfully changed in upper case", "success");
    }
  };
  const handleUpClick1 = () => {
    // console.log("object");
    if (text === "") alert("No text available");
    else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert(" Succesfully changed in lower case", "success");
    }
  };
  const handleUpClick2 = () => {
    // console.log("object");
    if (text === "") alert("Nothing to clear");
    else {
      let newText = "";
      setText(newText);
      props.showAlert(" Succesfully text is cleared", "success");
    }
  };
  const handleUpClick3 = () => {
    // console.log("object");
    let k = text.split(" ").length;
    if (text === "") alert("No text available");
    else alert(`The word Count is ${k}`);
  };

  const handleUpClick4 = () => {
    var copyText = document.getElementById("textBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    // alert("Copied the text: " + copyText.value);.
    if (text !== "") props.showAlert(" Text Succesfully Copied", "success");
  };

  const handleUpClick5 = () => {
    if (text === "") alert("First enter some text");
    else {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
  };
  const handleFindWord = () => {
    if (text === "") alert("First enter some text");
    else {
      let input = prompt("Which Word you want to find? Type here: ");
      if (text.search(input) >= 0)
        alert("Yes this word/letter is founded in this text");
      else alert("This word is not founded in this text");
    }
  };

  const handleFindReplace = () => {
    if (text === "") alert("First enter some text");
    else {
      let newtext1;
      let input = prompt("Which Word you want to find? Type here:");
      if (text.search(input) >= 0) {
        let input1 = prompt(
          "Yes this word founded. Please type new word to replace"
        );
        newtext1 = text.replace(input, input1);
        setText(newtext1);
      } else alert("This word is not founded in this text");
    }
  };
  const handleOnChange = (event) => {
    // console.log("object");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "silver",
          borderRadius: "10px",
          border: "2px-solid black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "silver",
              border: "2px solid black",
            }}
            value={text}
            id="textBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary my-2" onClick={handleUpClick1}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2  my-2" onClick={handleUpClick2}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick3}>
          Word Count
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick4}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick5}>
          Remove Spaces
        </button>
        <button className="btn btn-primary my-3" onClick={handleFindWord}>
          Find Word
        </button>

        <button className="btn btn-primary my-3" onClick={handleFindReplace}>
          Find & Replace
        </button>
      </div>

      <div
        className="container my-2"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "silver",
          borderRadius: "10px",
        }}
      >
        <h1>Your text Summary</h1>
        <li>
          Your text have{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          words sand {text.length}
          characters.
        </li>
        <li>
          You may take{" "}
          {(text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length *
            8) /
            1000}{" "}
          minutes to read it.
        </li>
        <li>Preview: {text}</li>
      </div>
    </>
  );
}
