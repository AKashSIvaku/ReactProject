import React from 'react';
function Msg()
{
 let age=18;
 let name="Kiran";
 let setStatus=false;
 let userDefault=undefined;
 let responseValue=null;
 console.log(age);
 console.log(name);
 console.log(setStatus);
 console.log(userDefault);
 console.log(responseValue);
 let oldage=age;
 age=25;
 let status=setStatus;
 setStatus=false;
 console.log(oldage);
 console.log(status);
 alert("Check the console output!");
}
const Akash1=()=>{
  return(
    <div>

     <button onClick={Msg}>Click</button>
    </div>
  )
}
export default Akash1;
