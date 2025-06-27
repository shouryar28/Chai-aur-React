import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef hook : ye kaam aayega password ko copy karne mein
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str +="0123456789";
    }
    if (charAllowed) {
      str += "!@#%&*()?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // generating random index

      pass += str.charAt(char) // picking character i.e. present at that index
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); // usecallback ka array, useEffect se alag hai kyuki ye use ho rh hai optimization ke liye kyuki wo memoization kar rha hai // Agar kuch method wapas se run hota hai too usko optimize kroo ye kaam hua useCallback kaa. , iske array ke andar jata hai wo parameters jispe method dependent hai .

   const copyPasswordToClipboard = useCallback(()=>{

    passwordRef.current?.select(); // ? : it means agar hai too means optianally
    passwordRef.current?.setSelectionRange(0,20); // chaahe hum kitna bhi bdaa length ka paasword generate kare but select hoga length of 20 ka hi.
    window.navigator.clipboard.writeText(password)

   }, [password]) // password pe dependency aayegi
  

  useEffect(() =>{passwordGenerator()}, [length , numberAllowed, charAllowed, passwordGenerator]) // this hook takes two parameters 1. callback 2. parameters due to which page will re run // passwordGenerator method rerun karega jaise hi hum kuch change laayenge length, numberAllowed  yaa fir charAllowed mein.
  return (
    <>
      <div className="bg-gray-600 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 font-semibold">
        <h1 className="text-center text-3xl p-5 text-white">
          Password Generator
        </h1>
        <div className="flex shadow rounded-xl overflow-hidden mb-4 p-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
            ref = {passwordRef}  // generating password reference , har ek input ke andar hum ek ref naam ka entity pass kar sakte hai 
          />
          <button 
          
          onClick={copyPasswordToClipboard} // copyPasswordToClipboard  : ye ek function hai jiska kaam uske naaam se ptaa chal rha hai
          
          className="outline-none bg-blue-700  px-3 py-0.5 shrink-0 text-white">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 p-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="font-semibold text-sm ml-3">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="font-semibold">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev) // prev ko access kiye usse value ko change karne mein assani ho gyaa , yha pe hum ek callback fire kar sakte hai, iss callback ke andar previous value ka access miltaa hai  
            }} 
            
            />
            <label htmlFor="characterInput" className="font-semibold">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


//ek concept hai ki hum khi pe bhi return ke andar koi bhi function run nhi kar rhe jo ki initially password generate kar ke de dee

// too initially password kaise generate ho rhaa ? 

// password generate ho rha hai useEffect hook ki wajah se , aur agar uske array ke andar ke elments mein agar koi bhi change aata hai too re-run kar jaayegaa.
