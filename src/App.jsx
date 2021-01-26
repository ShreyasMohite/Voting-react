import React, { useState } from "react";
import "./App.scss";

const App=()=>{
  const [pycount,setpycount]=useState(0);
  const incpy=()=>setpycount(pycount+1);
  const decpy=()=>{pycount!==0?setpycount(pycount-1):setpycount(0)}

  const[cpp,setcppcount]=useState(0);
  const incpp=()=>setcppcount(cpp+1);
  const decpp=()=>{cpp!==0?setcppcount(cpp-1):setcppcount(0)};

  const [java,setjavacount]=useState(0);
  const incjava=()=>setjavacount(java+1);
  const decjava=()=>{java!==0?setjavacount(java-1):setjavacount(0)};

  const [js,setjscount]=useState(0);
  const incjs=()=>setjscount(js+1);
  const decjs=()=>{js!==0?setjscount(js-1):setjscount(0)};

  const [C,setccount]=useState(0);
  const incC=()=>setccount(C+1);
  const decC=()=>{C!==0?setccount(C-1):setccount(0)};


  const [cs,setcscount]=useState(0);
  const incs=()=>setcscount(cs+1);
  const decs=()=>{cs!==0?setcscount(cs-1):setcscount(0)};

  const [ts,settscount]=useState(0);
  const incts=()=>settscount(ts+1);
  const dects=()=>{ts!==0?settscount(ts-1):settscount(0)};
  

  return (
    <>
      <div className="content-center">
        <div className="card">
          <div className="title">
            <h1>voting center</h1>
          </div>
          <div className="pannel1">
            <h2>Python</h2>
            <span>{pycount}</span>
            <button onClick={incpy}>+</button>
            <button onClick={decpy}>-</button>
          </div>
          <div className="pannel1">
            <h2>C++</h2>
            <span>{cpp}</span>
            <button onClick={incpp}>+</button>
            <button onClick={decpp}>-</button>
          </div>
          <div className="pannel1">
            <h2>Java</h2>
            <span>{java}</span>
            <button onClick={incjava}>+</button>
            <button onClick={decjava}>-</button>
          </div>
          <div className="pannel1">
            <h2>JavaScript</h2>
            <span>{js}</span>
            <button onClick={incjs}>+</button>
            <button onClick={decjs}>-</button>
          </div>
          <div className="pannel1">
            <h2>C</h2>
            <span>{C}</span>
            <button onClick={incC}>+</button>
            <button onClick={decC}>-</button>
          </div>
          <div className="pannel1">
            <h2>C#</h2>
            <span>{cs}</span>
            <button onClick={incs}>+</button>
            <button onClick={decs}>-</button>
          </div>
          <div className="pannel1">
            <h2>TypeScript</h2>
            <span>{ts}</span>
            <button onClick={incts}>+</button>
            <button onClick={dects}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;