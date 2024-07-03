import { useState } from "react";

export default function TextInput({onTextChange}) {
    const[ text, setText ] = useState("");

    function handleTextChange(event) {
        const newText = event.target.value;
        setText(newText);
        onTextChange(newText);
      } 
    
    return (

        <div className="inputText">

            <label>Текст</label>
            <textarea
                value={text}
                onChange={handleTextChange}
            />

        </div>
        
    )
    
}