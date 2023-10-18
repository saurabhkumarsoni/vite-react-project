import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";

function App() {
const [length, setLength] =useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [characterAllowed, setCharacterAllowed] = useState(false);
const [password, setPassword] = useState(''); 

// useRef hook
const passwordRef = useRef(null);

const passwordGenerator = useCallback(() =>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str +="0123456789"
  if(characterAllowed) str +="!@#$%^&*()_-+={}[]`~"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);    
    pass += str.charAt(char);
  }

  setPassword(pass)
}, [length, numberAllowed, characterAllowed, setPassword])

const copyPasswordToClip = useCallback(() =>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(password);
}, [password])

useEffect(() =>{ passwordGenerator()}, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
  <>
    <div className="w-full  max-w-md max-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
    <h4 className="text-4xl text-center text-white my-3">Password Generator</h4>

      <div className="flex shadow rounded-lg overflow-auto mb-4">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordRef}
        />
        <button type="button" className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClip} >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) =>{setLength(e.target.value)}}
           />
           <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox"
          defaultChecked ={numberAllowed}
          id="numberInput"
          onChange={() =>{
            setNumberAllowed((pre) => !pre);
          }} />
          <label htmlFor="">Number</label>
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox"
          defaultChecked ={characterAllowed}
          id="characterInput"
          onChange={() =>{
            setCharacterAllowed((pre) => !pre);
          }} />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
