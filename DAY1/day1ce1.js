
import React from 'react';
function alertMsg()
{
  alert("Message from javascript");
  console.log("Message to developer");
}
const Akash=()=>{
  return(
    <div>
    <button onClick={alertMsg}>Click</button>
    </div>
  )
}
export default Akash;
