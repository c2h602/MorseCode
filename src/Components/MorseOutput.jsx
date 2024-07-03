import { useEffect, useState } from "react";
import { morseDictionary } from "../data";

export default function MorseOutput({inputText}) {
    const [morseCode, setMorseCode] = useState('');

    function translateToMorse(text) {
        return text.split('').map(char => morseDictionary[char] || char).join(' ');
    }

    useEffect(() => {
        setMorseCode(translateToMorse(inputText));
    }, [inputText]);

    
    return (

        <div className="morseCode">
            <label>Азбука Морзе</label>
            <textarea readOnly
                value={morseCode} 
            />
        </div>
        
    )
    
}