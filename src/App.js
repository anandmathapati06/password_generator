import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { renderMatches } from 'react-router-dom';
function App() {
const [pass_length,setpass_length] = useState(10);
let [count,setcount] = useState(0)  


  let [randomNumber,setrandom] = useState('')
  const [WithString,setWithString] = useState(false)
  const [WithNumber,setWithNumber] = useState(false)
  const num = useRef('')
  let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let password
  let  number = ''

  useEffect(() => {
    num.current.innerHTML = "copy"
    num.current.style.backgroundColor = "#2563EB"
})
 
  const copy = () => {
      num.current.innerHTML = "copied"
      num.current.style.backgroundColor = "rgb(22 ,225, 52)"
  }
  // let count = 0
  // function generate() {
    
  //   const finish = setInterval(()=>{
  //     count++
  //     password  = Math.floor(Math.random()*string.length)
  //     setrandom(number += string[password])
  //     if(count>=pass_length){
  //       clearInterval(finish)
  //     }
  //   },100)
    
    
    
  // }
  
  //   let temp 
  // let count=0
  // function finish(){

    
  //   let i = 0
  //   let j = 0
  //   let d = setInterval(()=>{
  //     if(string[i] === number[j] ){
        
        
  //       count++
  //       setrandom(randomNumber+number[j])
                
  //       j++
        
  //       clearInterval(d)
        
       
  //     }
  //     setrandom(randomNumber+string[i])
  //     i++
      
  //   },100)
  // }
  
  const work = useMemo(()=>{
    
    if(count<pass_length){

    
    // num.current.innerHTML = "copy"
    if(WithNumber) {string += "1234567890"}
    if(WithString) {string += "!@#$%^&*+-/_="}
    
      
    //  generate()
    

      password = Math.floor(Math.random()*string.length)
      
      number = string[password]
    
    
    

      let i = 0
    let j = 0
    let d = setInterval(()=>{
      if(string[i] === number ){
        
        
        
        
               
       setcount(count+1)
       clearInterval(d)
        
       
      }
      setrandom(randomNumber+string[i])
      i++
      
    },10)
         
    
    console.log(number);
    
}},[pass_length,count,WithNumber,WithString]);
      
      
    
    // useEffect(()=>
    // {
    //   let incre = ()=> {

    //     if(count<=pass_length){
    //       setcount(count++)
    //     }
    //   }
    //   incre()
    //  },[randomNumber])
    
    
  return (
    <>
    <div className='w-full h-screen'>
      <div className='bg-green-800 text-white flex justify-center text-2xl'>
          <h1>Password Generator</h1>
      </div>
      <div className=' flex  items-center flex-col  py-6 border h-[20%]'>
          <div className='border flex justify-center items-center w-[30%] h-[50%] bg-blue-300'>
            <input  type="text" value={randomNumber} readOnly className='border text-black-900 rounded mr-3'/>
            <button 
            ref={num}
            onClick={()=>{
              copy()
              window.navigator.clipboard.writeText(randomNumber)
              
            }

            } 
            style={{background:""}}
            className='bg-blue-600 w-16 rounded ' >copy</button>
          </div>
          <div className='flex justify-center items-center  py-3 bg-blue-300 w-[30%]'>
            <input id='pass' defaultValue={10}  max={16}
             onChange={(e)=> {
              setrandom("")
              setcount(0)
              setpass_length(e.target.value)} 
             }
             
             type='range' className="text-black text-3xl "/>
             <label className='mx-3' htmlFor='pass'>{pass_length}</label>
            <input type='checkbox'  className="" id='alph'
            onChange={()=>{
              setrandom("")
              setcount(0)
              setWithString((prev)=>!prev)
            }}
            />
            <label className='mx-2' htmlFor='alph'>special</label>
            <input type='checkbox' className="" id='numbers'
              onChange={()=>{
                setrandom("")
              setcount(0)
                setWithNumber((prev)=>!prev)
              }}
            />
            <label className='mx-2' htmlFor='numbers'>Number</label>
          


          </div>
      </div>
      </div></>
  );
}

export default App;
