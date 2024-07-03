import Header from "./Components/Header"
import MorseOutput from "./Components/MorseOutput"
import TextInput from "./Components/TextInput";
import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  
  return (
    <>
    <Header/>
      <main>
        
        <div className="row">
        <TextInput onTextChange={setInputText} />  
        <MorseOutput inputText={inputText} />
        </div>
           
      </main>
    </>
    
  )
}

